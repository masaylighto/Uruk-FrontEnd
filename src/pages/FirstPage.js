import React from "react";
import CHome from './Home'
import CProjects from './Projects';
import Ccontribute from './Contribute';
import Ccontacts from './Contacts';
import ReactDOM from 'react-dom';
import CNavbar from './../sharedjs/navbar';
import './../css/tailwind.css'
import './../css/shared.css'
import './../css/firstPage.css'
import {Translation,FormatLink} from './../Config'

function RenderTheSite(Langauge)
{
    ReactDOM.render(
        <React.StrictMode> 
          <CNavbar/>
          <CHome></CHome>    
          <CProjects></CProjects>
          <Ccontribute></Ccontribute>
          <Ccontacts></Ccontacts>
          </React.StrictMode>,
        document.getElementById('root')
      );
}

class CFistPage extends React.Component {
    

    componentDidMount()
    {
        //getting language from the server to show them as card for user to chose
        this.GetLanguages()
    }
     GetLanguages()
    {
      
         fetch(FormatLink(Translation.GetLanguages))
         .then(result=>result.json())
         .then(result =>this.ProccessResponse(result))
    }
    ProccessResponse(result){
        //this function will decide weather to load language card or inform user that fetching process failed
        if(result.State!=="Done")
        {
           this.FailedToLoad()
           return
        }       
        this.setState({Elements:this.Languages(result.Data)})     
    }
    
    state={
        Elements:""
    }
    Languages(Data){
        return  JSON.parse(Data).map((Langauge)=>
        {
          
           return this.Card(Langauge.language)
        })
       
    }
    Card(Langauge)
    {
        return <div onClick={(()=>{this.SelectLanguage(Langauge)}).bind()} className="text-3xl noto-font   h-28  rounded-lg card-wave shadow hover:-mt-3 flex justify-center items-center"><p className="Special-text-color">{Langauge}</p></div>
    }
    SelectLanguage(Langauge){
        RenderTheSite(Langauge)
    }
    FailedToLoad(){
        //if the data fetching failed for some reason then set the
        //Elements variable in the state to the FailedToLoadDiv which is  html element that inform user that fetching failed
        this.setState({Elements:this.FailedToLoadDiv()})
    }
    FailedToLoadDiv(){

        return <div className="noto-font fixed top-0 left-0 right-0 Special-text-color bottom-0 flex flex-row justify-center items-center"><p>Couldn't Load Language From The Server</p></div>
    }
    render() {
        //The Element is in the state variable so we can render the ui depend on the server response
        return <div  className="noto-font fixed flex flex-col  justify-center text-3xl h-full top-0 left-0 right-0 ">  
          <div className="grid grid-auto-column justify-center  gap-3 ">
         {this.state.Elements}
         </div>
        </div>
    }
}
export default CFistPage