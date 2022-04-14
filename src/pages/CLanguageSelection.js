import React from "react";
import CHome from './Home'
import CProjects from './Projects';
import CContribute from './Contribute';
import CContacts from './Contacts';
import ReactDOM from 'react-dom';
import CNavbar from './../sharedjs/navbar';
import './../css/tailwind.css'
import './../css/shared.css'
import './../css/languageSelection.css'
import {Translation,FormatLink} from './../Config'

function RenderTheSite(Langauge)
{   
    ReactDOM.render(
        <React.StrictMode> 
          <CNavbar Langauge={Langauge}/>
          <CHome Langauge={Langauge}/>   
          <CProjects Langauge={Langauge}/>
          <CContribute Langauge={Langauge}/>
          <CContacts Langauge={Langauge}/>
          </React.StrictMode>,
        document.getElementById('root')
      );
}

class CLanguageSelection extends React.Component {
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
    /** 
     this function will decide weather to load language card , inform user that fetching process failed  or if there is already selected language in the url       
    */
    ProccessResponse(result){
     
        if(result.State!=="Done")
        {
           this.FailedToLoad()
           return
        }       
        //parse the lanuage into Json
        let Languages=JSON.parse(result.Data)
        //if the url contain a lanuage and its exist in the langauge list we got from the backend then render the page
        // if url contain a lanuage  then terminate  the excution of this method
        if(this.LanguageIsSelected(decodeURI(window.location.pathname),Languages))
        {
            return;
        }
        this.setState({Elements:this.Languages(Languages)})     
    }
    /**      
      @param {String} Path from window.location.pathname
      @param {"Dict[String language,String]"} Langauges 
      @returns bool
      this method will Check if there is a selected language in the url and if its exist in the list retrived from the backend
     */
    LanguageIsSelected(Path,Langauges)
    {
     //looping through all the element in the Langauges list   
        for (const Langauge of Langauges) {
           //check if the path contain the language 
           // the path moslty will be somthing like this
           //   /language/****
           //so we Check if this path contain languge if it is then we render the site return true
           // we use Langauge.language cause Langauge is a json array element which is something like this language:value
           // so we access it through Langauge.language
            if(Path.includes(Langauge.language))
            {
                RenderTheSite(Langauge.language)
                return true;
            }
        }
        return false
    }
    state={
        Elements:""
    }
    Languages(Data)
    {
        // mapping all the language into cards
        return Data.map((Langauge)=>
        {   // we use Langauge.language cause Langauge is a json array element which is something like this language:value
            // so we access it through Langauge.language        
           return this.Card(Langauge.language)
        })       
    }
    Card(Langauge)
    {   
        //create a card and bind the SelectLanguage 
        return <div onClick={(()=>{this.SelectLanguage(Langauge)}).bind()} className="text-3xl noto-font h-28 rounded-lg card-wave shadow hover:-mt-3 flex justify-center items-center"><p className="Special-text-color">{Langauge}</p></div>
    }
    SelectLanguage(Langauge){
        //add the language into the url
        window.location.href+=Langauge+"/"
        //render the Main Site
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
export default CLanguageSelection