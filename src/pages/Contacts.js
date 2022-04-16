import React from "react";
import './../css/shared.css'
import './../css/tailwind.css'

var ProjectsMember = [
    {
      Name:"Ali Abdul Ghani",
      Email:"alimiracle@riseup.net"
    },
    {
      Name:"Hayder Majid",
      Email:"hayder@riseup.net"
    },
    {
      Name:"Azzen Abidi	",
      Email:"azzen.abidi@gmail.com"
    },
    {
      Name:"Norah",
      Email:"norah@riseup.net"
    },
    {
      Name:"Zakaria Mekki Belbali	",
      Email:"zakibelbali12@gmail.com"
    },
    {
      Name:"kzimmermann",
      Email:"kzimmermann@vivaldi.net"
    },
    {
      Name:"Ahmad Nourallah	",
      Email:"ahmadnurallah@gmail.com"
    },
  ];
  
  

class Ccontacts extends React.Component
{   

  //create List of Projects row
  ContributorCard() {
     let index=1;
    return ProjectsMember.map((Row) => {
      index++
      return this.Card(Row.Name, Row.Email,index);
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

//create table that represent the ui
ContributorsGrid() {
    return (
      <div className="grid justify-center grid-auto-column w-full gap-1  mt-10   flex-col  ">
        {this.ContributorCard()}
      </div>
    );
  }

  render() {
    return (
     
        <div id="Contacts" className="flex   H100Vmin mt-10     flex-col">
          <p className=" text-center   Special-text-color text-2xl my-10">Project Members </p>
          {this.ContributorsGrid()}
        </div>
    
    );
  }
}
export default Ccontacts




