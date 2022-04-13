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
import { Result } from "postcss";
function RenderTheSite()
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
    constructor(props)
    {
        super(props)

    }
    componentDidMount()
    {
        this.GetLanguages()
    }
    GetLanguages()
    {
      
        fetch(FormatLink( Translation.GetLanguages)).then(result=>result.json()).then(Result => console.log(Result))  

    }
    Languages=[]
    Card(Langauge)
    {
        return <div className="text-sm rounded-lg card-wave ">{Langauge}</div>
    }
    LanguagesGrid(){

        return(
            this.Languages.map((Langauge)=>{

                return this.Card(Langauge)
            })
            
        )
    
    }
    render() {
        return <div  className="grid grid-auto-column">
         
        </div>
    }
}
export default CFistPage