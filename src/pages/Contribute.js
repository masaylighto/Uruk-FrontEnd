import React from "react";
import "./../css/contribute.css";
import "./../css/tailwind.css";
import "./../css/shared.css";
import {Contributors,Translation,FormatLink} from './../Config'


class CTerms extends React.Component {

  ShowTerms(Element) {
    Element.target.animate([{ maxWidth: "14rem" }, { maxWidth: "60%" }], {
      duration: 100,
      direction: "normal",
      fill: "forwards",
    });
    Element.target.children[1].animate(
      [{ maxHeight: "0px" }, { maxHeight: "500px" }],
      { duration: 300, direction: "normal", fill: "forwards" }
    );
  }
  HideTerms(Element) {
    Element.target.animate([{ maxWidth: "60%" }, { maxWidth: "14rem" }], {
      duration: 100,
      direction: "normal",
      fill: "forwards",
    });
    Element.target.children[1].animate(
      [{ maxHeight: "500px" }, { maxHeight: "0px" }],
      { duration: 300, direction: "normal", fill: "forwards" }
    );
  }
  
  render() {
    return (
      <div
        onMouseEnter={this.ShowTerms}
        onMouseLeave={this.HideTerms}
        className="guide-line-text-size MaxWidth14rem  flex flex-col w-fit ml-14  mt-6 shadow rounded-2xl  p-4   ">
        <div>{this.props.Terms}</div>
        <p className={"MaxHeightZero overflow-hidden"}>
        {this.props.text}
        </p>

        <a href="https://uruk.tuxfamily.org/bt/login_page.php" className="text-blue-300">
          Uruk Issue Tracker
        </a>
      </div>
    );
  }
}
class Ccontribute extends React.Component {
  // this map will create the list of Guide line element in the ui
  Contribute_Guide_Line(...Lines) {
    let index=0
    return Lines.map((Line) => {
       
      return (
        <div key={index++} className="guide-line-text-size font-normal  guide-line-size h-12  rounded-2xl font-simebold p-4 shadow-sm ">
          {Line}
        </div>
      );
    });
  }



  
  Logo() {
    return (
      <div className="Logo z-10 fixed m-auto top-0 left-0 bottom-0 right-0 opacity-20 bg-no-repeat bg-contain" />
    );
  }

  GetTranslation()
	{
	
        fetch(FormatLink(Translation.GetPageTranslations,"Contribute",this.props.Langauge))
        .then(result=>result.json())
        .then(result =>this.ProccessResponse(result))
	}
	ProccessResponse(Response)
	{
		if(Response.State!=="Done"){
			return;
		}
    Response=Response.Data    
    let GuideLine=this.CreateGuideLine(Response.GuideLine1,Response.GuideLine2,Response.GuideLine3,Response.GuideLine4,Response.GuideLine5,Response.GuideLine6)
    let Terms = this.CreateTerms(Response.TermsWord,Response.Terms)
    let Title = Response.Title
    let ReadFirst = Response.ReadFirst
    this.setState({GuideLine,Terms,Title,ReadFirst})
	}
	state={
		Title:"",
    ReadFirst:"",
    GuideLine:"",
    Terms:""
	}
	componentDidMount()
	{
		this.GetTranslation();
	}
  CreateGuideLine(...GuideLine){
    return this.Contribute_Guide_Line(...GuideLine) 
  }
  CreateTerms(TermsWord,Terms)
  {
    return <CTerms Terms={TermsWord} text={Terms} />  
  }
  render() {
    return (
      <div dir={this.props.Langauge==="العربية"?"rtl":"ltr"}  id="Contribute" className="flex H100Vmin mt-10   page-hight    flex-col">
        <p className="  Special-text-color text-2xl mt-10  mx-auto    w-fit">
          {this.state.Title}
         </p>
        <p className=" Special-text-color  mb-10 mx-auto   w-fit">
          {this.state.ReadFirst}
        </p>
        <div className="flex flex-col ml-10 gap-3  mt-2">
          {this.state.GuideLine}
          
        </div>
        {this.state.Terms}     
      </div>
    );
  }
}
export default Ccontribute;
