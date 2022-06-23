import React, { useRef } from 'react';
import '../Assets/css/tailwind.css'
import '../Assets/css/Projects.css'
import '../Assets/css/Shared.css'
import {LeftArrow,RightArrow} from '../Components/Varity'
import {FormatLink,Projects,Translation} from '../Helpers/ApiEndPoints'
import {QuitIfInVaild, QuitReact} from '../Helpers/HelperFunctions'
const uruk_voice = require("./../Assets/Audio/uruk-sound.ogg");

let BrightColors=["#91DAFF","#69E8FC","#5CF4E6","#80FCC1","#B9FD95","#F9F871"]
let DarkenColors=["#038ED5","#00ADDF","#00C9CF","#14DFAD","#9CF087"]
class CProjects extends React.Component{
 
    KeepIndexInRange(Index){
         //this to keep the index that used to determine the color in the Color Array Range 
         //through subtracting the lenghth from the index continuously if the index was larger than the range
        let ColorIndex=Index
        while(ColorIndex>BrightColors.length-1){
            
            ColorIndex-=BrightColors.length-1;
        }
        return ColorIndex
    }

    componentDidMount(){
        this.GetTranslation()
        this.GetProject()
        
    }
    GetProject(){
        //Take =9
        //Skip 0
        //Pagination Parameters       
        fetch(FormatLink(Projects.GetProjects,this.props.Language,9,this.LastCardIndex))
        .then(result=>result.json())
        .then(result=>QuitIfInVaild(result))
        .then(result =>this.CreateProjectsCards(result))
        .catch(()=>QuitReact("Failed to retrieve Projects from the server "))
	 } 
     GetTranslation()
     {
     
         fetch(FormatLink(Translation.GetPageTranslations,"Projects",this.props.Language))
         .then(result=>result.json())
         .then(result=>QuitIfInVaild(result))
         .then(result =>this.SetTranslation(result))
         .catch(()=>QuitReact("Failed to retrieve Projects Translations from the server"))
     }
     SetTranslation(Response){
    
        this.state.PartTitle =Response.Title;
        this.state.Visit =Response.Visit;
		this.setState(this.state)
   
     }

    ProjectsCard(project,Index){
        let color=BrightColors[this.KeepIndexInRange(Index)]
        let Darkcolor=DarkenColors[this.KeepIndexInRange(Index)]
        return (<div key={Index} style={{boxShadow:"0px 0px 13px -3px "+color+"a6",color:Darkcolor}} className={'rounded-lg flex justify-between px-4  h-80 shadow flex-col relative '}>
             <p className='pt-4 '>{project.name}</p>
            
               <div className='  rounded  overflow-scroll scrollbar-none   text-sm text-black w-full flex justify-center items-center'>
                <p className='h-fit'>
                {project.description}
                </p>
                </div>
           
            <a href={project.link} style={{boxShadow:"0px 0px 13px -3px "+color,background:color}}  className='h-11 rounded hover-Darken active-Darken w-24 mb-3 text-white justify-center items-center flex text-center mr-3'>{this.state.Visit}</a>
        </div>
        )
    }
    state={
        Cards:"",
        PartTitle:"Our Projects",
        Visit:"Visit"
    }
    
    LastCardIndex=0

    CreateProjectsCards(projects)
    {   
        if(projects==""){
            return
        }
        this.state.Cards=  projects.map((project,index)=>{        
         return   this.ProjectsCard(project,index)
        })
        this.LastCardIndex+=9
        this.setState(this.state)
    }
    NextProjects()
    {
        this.GetProject()
    }
    PreviousProjects()
    {
        this.LastCardIndex=0 
        this.GetProject()
    }
    ProjectsGrid(){
        return (<div  className={'grid gap-24 md:w-5/6 md:mx-auto h-fit justify-center grid-auto-cols   Grid-W-300 '}>
            {this.state.Cards}
            
        </div>)
    }
    PartTitle()
    {
        return <p className='w-fit Text-Gradiant-Blue mx-auto text-3xl'> {this.state.PartTitle}</p>
    }
    render()
    {
        return (<div id='Projects'  className='w-full h-fit pb-10 gap-28 flex  flex-col'>
        {this.PartTitle()}
        <div className='flex md:flex-row flex-col justify-evenly items-center'>
         <button  onClick={()=>this.PreviousProjects()} className='w-10 md:rotate-0   rotate-90  md:my-auto mb-5  text-gray-300 h-10 text-3xl bg-transparent'>{this.props.Language==="العربية"?"ᐳ":"ᐸ"}</button>
         {this.ProjectsGrid()}
         <button  onClick={()=>this.NextProjects()}   className='w-10 md:rotate-0  rotate-90 md:my-auto mt-5 h-10 text-gray-300 text-3xl bg-transparent'>{this.props.Language==="العربية"?"ᐸ":"ᐳ"} </button>
        </div>
         </div>)
    }

}
export default CProjects
