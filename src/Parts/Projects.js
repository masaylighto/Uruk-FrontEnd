import React from 'react';
import '../Assets/css/tailwind.css'
import '../Assets/css/Projects.css'
import '../Assets/css/Shared.css'

import {FormatLink,Projects,Translation} from '../Helpers/ApiEndPoints'
import {QuitIfInVaild, QuitReact} from '../Helpers/HelperFunctions'
const uruk_voice = require("./../Assets/Audio/uruk-sound.ogg");
let Colors=["#038ED5","#00ADDF","#00C9CF","#14DFAD","#9CF087"]
let projects=[1,2,3,4,5,6,7,8,9]
class CProjects extends React.Component{

    KeepIndexInRange(Index){
         //this to keep the index that used to determine the color in the Color Array Range 
         //through subtracting the lenghth from the index continuously if the index was larger than the range
        let ColorIndex=Index
        while(ColorIndex>Colors.length-1){
            
            ColorIndex-=Colors.length-1;
        }
        return ColorIndex
    }
    ProjectsCard(Name,Index){
       
       
        return (<div key={Index}  className={'rounded flex h-60 shadow flex-col relative  scrollbar-none '}>
            <div style={{backgroundColor:Colors[this.KeepIndexInRange(Index)]}} className='h-60 text-white text-2xl absolute left-0 right-0 bottom-0 top-0 w-full flex justify-center items-center'>
                Projects1
            </div>
            <div className='h-60 text-white  w-full flex overflow-scroll scrollbar-none p-4'>
                <div className='h-full text-white w-full flex justify-center items-center'>
                Uruk GNU/Linux is a fully free operating system for home users, small enterprises and educational centers based on Trisquel.

                </div>
            </div>
        </div>
        )
    }
    state={
        Cards:"",
        PartTitle:""
    }
    componentDidMount(){
        let Cards= this.CreateProjectsCards()
        this.state.Cards=Cards
        this.setState({Cards})
    }
    CreateProjectsCards(){
       return projects.map((element,index)=>{
            return this.ProjectsCard("",index)
        })
    }
    
    ProjectsGrid(){
        return (<div className={'grid gap-4 justify-center grid-auto-cols h-96  Grid-W-250 '}>
            {this.state.Cards}
            
        </div>)
    }
    PartTitle()
    {
        return <p className='w-fit Text-Gradiant-Blue mx-auto text-3xl'> {this.state.PartTitle}</p>
    }
    render()
    {
        return (<div className='w-full  flex H-100Vmin flex-col'>
        {this.PartTitle()}
        {this.ProjectsGrid()}
        
         </div>)
    }

}
export default CProjects