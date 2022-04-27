import React from 'react';
import '../Assets/css/tailwind.css'
import '../Assets/css/Contribution.css'
import '../Assets/css/Shared.css'
import {FormatLink,Translation} from '../Helpers/ApiEndPoints'
import {QuitIfInVaild, QuitReact} from '../Helpers/HelperFunctions'
import { Tringle } from '../Components/Varity';

class CContribution extends React.Component{
    componentDidMount(){
        this.GetTranslation()
    }
    GetTranslation()
    {
        fetch(FormatLink(Translation.GetPageTranslations,"Contribute",this.props.Language))
        .then(result=>result.json())
        .then(result=>QuitIfInVaild(result))
        .then(result =>this.SetTranslation(result))
        .catch(()=>QuitReact("Failed to retrieve Data from the server"))
    } 
    CenteredDiv()
    {
        
        return (
             <div className='w-4/6 z-20 p-5 shadow flex   flex-col    rounded-xl bg-white'>
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
	
    let GuideLines = this.ContributionGuideLine(Response.GuideLine1,Response.GuideLine2,Response.GuideLine3,Response.GuideLine4,Response.GuideLine5,Response.GuideLine6)
    let Terms = this.CreateTerms(Response.Terms)
    let Title = this.Title(Response.Title)
    this.setState({GuideLines,Terms,Title})
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
    ContributionGuideLine(...Lines) {
        
        return Lines.map((Line,index) => {
          return (
            <li key={index} className='text-blue-300'>
                <span className='text-black'>
                 {Line}
                </span>
            </li>
          );
        });
      }
    
    
    render(){

        return (
                 <div id='Contribution' className='MH-100Vmin relative  flex justify-center items-center Bg-Gradiant-Blue w-full'>
                   {this.CenteredDiv()}
                   <Tringle className={"absolute bottom-0 left-0 right-0"}/>
                 </div>

        )
    }
}
export default CContribution