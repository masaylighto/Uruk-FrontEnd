import React from "react";
import './../css/navbar.css'
import './../css/tailwind.css'
import {WebsiteLink,FormatLink} from './../Config'
class CNavbar extends React.Component
{   
    componentDidMount(){
        this.GetNavbarButton()
    }
    state={
        Buttons:""
    }
    redirect(Link)
    {
     
        window.location.href=Link
    }
    /**
     * this method used to get the text that is supposed to show on this page from the backend
     * 
     */
    GetNavbarButton()
    {
        fetch(FormatLink(WebsiteLink.GetLinks,this.props.Langauge))
        .then(result=>result.json())
        .then(result =>this.ProccessResponse(result))
    }
    /**
     * Recive the Data From the backend Check if it Receivied successfully then fill the ui with it
     * @param {*} Response THE data that comming through the backend
     */
    ProccessResponse(Response)
    {  
 
        if(Response.State!=="Done"){
            return;
        }     
        let Buttons = this.CreateBtnList(Response.Data)
        this.setState({Buttons});       

    }
    CreateBtnList(ButtonsInfo)
    {
    let index=0
       return ButtonsInfo.map((element)=>{
           
           index++   
           return this.button(element[0],element[1],index)
        })   
    }
    button(Name,Link,index)
    {
        
        return <button key={index} onClick={(()=>{this.redirect(Link)}).bind()} className="nav-btn-color nav-btn-raduis nav-btn-txt  font-medium w-24  h-8 p-1 text-center" >{Name}</button>
    }
    render(){
        return <div dir={this.props.Langauge==="العربية"?"rtl":"ltr"}  className="flex  flex-col-reverse w-fit ml-auto px-2 z-10 md:flex-row items-center  md:h-12 ">
            {this.state.Buttons}
        </div>
    }
}
export default CNavbar