import React from 'react';
import '../Assets/css/tailwind.css'
import '../Assets/css/Contribution.css'
import '../Assets/css/Shared.css'
import {FormatLink,Translation,ContributionGuideLines} from '../Helpers/ApiEndPoints'
import {QuitIfInVaild, QuitReact} from '../Helpers/HelperFunctions'
import { Tringle } from '../Components/Varity';

class CContribution extends React.Component{
    componentDidMount(){
        this.GetTranslation()
        this.GetContributionGuideLines()
    }
    GetTranslation()
    {
        fetch(FormatLink(Translation.GetPageTranslations,"Contribute",this.props.Language))
        .then(result=>result.json())
        .then(result=>QuitIfInVaild(result))
        .then(result =>this.SetTranslation(result))
        .catch(()=>QuitReact("Failed to retrieve Data from the server"))
    } 
    GetContributionGuideLines()
    {
        fetch(FormatLink(ContributionGuideLines.Get,this.props.Language))
        .then(result=>result.json())
        .then(result=>QuitIfInVaild(result))
        .then(result =>this.ContributionGuideLine(result))
        .catch(()=>QuitReact("Failed to retrieve Data from the server"))
    }
    CenteredDiv()
    {
        
        return (
             <div style={{background:"#f7fcff"}} className='md:w-4/6 w-full z-20 p-5 shadow flex   flex-col    md:rounded-2xl '>
             {this.state.Title}
             <div className='my-6 mx-5'>
             {this.state.GuideLines}
             </div>
             {this.state.Terms}
             <a href='https://uruk.tuxfamily.org/bt/login_page.php' className='text-blue-400'>Uruk Issue Tracker</a>
            </div>
        )
        
    }
    
    SetTranslation(Response)
	{
	
        this.state.Terms= this.CreateTerms(Response.Terms)
        this.state.Title=this.Title(Response.Title)
   
    this.setState(this.state)
	}
	state={
		Title:"",    
        GuideLines:"",
        Terms:""
	}
    Title(Title){
        return <div className='mx-auto text-2xl mt-5  Text-Gradiant-Blue'>{Title}</div>
    }
    CreateTerms(Terms){
        return <p className=''>{Terms}</p>
    }
    ContributionGuideLine(Lines) {
             
        this.state.GuideLines= Lines.map((Line,index) => {
          return (
            <li key={index} className='text-blue-300'>
                <span className='text-black'>
                 {Line.guideLine}
                </span>
            </li>
          );
        });
        this.setState(this.state)
      }
    
    
    render(){

        return (
                 <div id='Contribution' className='MH-100Vmin relative bg-gradiant-blue-Cliped-down flex justify-center items-center  w-full'>
                   {this.CenteredDiv()}
                 </div>

        )
    }
}
export default CContribution