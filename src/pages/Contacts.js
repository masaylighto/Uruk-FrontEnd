import React from "react";
import './../css/shared.css'
import './../css/tailwind.css'
import {ProjectsMember,Translation,FormatLink} from './../Config'

  

class Ccontacts extends React.Component
{   

  //create List of Projects row
  ContributorCard(data) {
     let index=1;
    return data.map((Row) => {
      index++
      return this.Card(Row[0], Row[1],index);
    });
  }
  CopyToClipboard(Text,Element){
    window.navigator.clipboard.writeText(Text)   
    Element.target.parentElement.children[0].animate([{bottom:"100%",opacity:"0"},{bottom:"0%",opacity:"1"},{bottom:"0%",opacity:"1"},{bottom:"100%",opacity:"0"}],{fill:"forwards",duration:2000})
  }
  //represent the element that represent the project row in the project table
  Card(Name, Email,index) {
    return (
      <div key={index} onClick={(Element)=>this.CopyToClipboard(Email,Element)} className={"flex relative text-center  rounded-2xl flex-col border  text-sm  "}>
        <div className="absolute  opacity-0 top-0 bottom-full left-0 right-0 bg-white  flex justify-center  items-center text-2xl ">
             <p className="Special-text-color ">Copied</p>      
        </div>
        <div
          className={"p-4 w-full break-words "}>
         {Name}
        </div>
        <div className={"p-4 w-full break-words "}>
          {Email}
        </div>
      </div>
    );
  }
  state={
    Title:"",
    Cards:""
  }
  componentDidMount()
  {
    this.getContributors()
    this.getTranslation();
  }
  getContributors()
  {	
     fetch(FormatLink(ProjectsMember.GetMember,this.props.Langauge))
    .then(result=>result.json())
    .then(result =>this.FillContributorCard(result))
  }
  getTranslation()
  {	
     fetch(FormatLink(Translation.GetPageTranslations,"Contacts",this.props.Langauge))
    .then(result=>result.json())
    .then(result =>this.FillTextFields(result))
  }
  FillTextFields(Response){
 
    if(Response.State!=="Done"){
      return;
    }   

    Response=Response.Data
    this.state.Title=Response.Title
    this.setState(this.state)
  }
  FillContributorCard(Response)
  {
    if(Response.State!=="Done"){
      return;
    }   
    Response=Response.Data
    let Cards= this.ContributorCard(Response)
    this.state.Cards=Cards
    this.setState(this.state)
  }
//create table that represent the ui
ContributorsGrid() {
    return (
      <div className="grid justify-center grid-auto-column w-full gap-1  mt-10   flex-col  ">
        {this.state.Cards}
      </div>
    );
  }

  render() {
    return (
     
        <div id="Contacts" className="flex   H100Vmin mt-10     flex-col">
          <p className=" text-center   Special-text-color text-2xl my-10">{this.state.Title} </p>
          {this.ContributorsGrid()}
        </div>
    
    );
  }
}
export default Ccontacts




