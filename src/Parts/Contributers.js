import React from 'react';
import '../Assets/css/tailwind.css'
import '../Assets/css/Contribution.css'
import '../Assets/css/Shared.css'
import {FormatLink,Translation,Contributors} from '../Helpers/ApiEndPoints'
import {QuitIfInVaild, QuitReact,CopyToClipboard} from '../Helpers/HelperFunctions'
import { Tringle } from '../Components/Varity';

class CContributers extends React.Component{
    

   componentDidMount(){
       this.GetTranslation()
       this.GetContributers()
       
   }
   GetContributers(){

       fetch(FormatLink(Contributors.GetContributors,this.props.Language))
       .then(result=>result.json())
       .then(result=>QuitIfInVaild(result))
       .then(result =>this.CreateCards(result))
       .catch(()=>QuitReact("Failed to retrieve Data from the server"))
    } 
    GetTranslation()
    {
    
        fetch(FormatLink(Translation.GetPageTranslations,"Members",this.props.Language))
        .then(result=>result.json())
        .then(result=>QuitIfInVaild(result))
        .then(result =>this.SetTranslation(result))
        .catch(()=>QuitReact("Failed to retrieve Data from the server"))
    }
    SetTranslation(Response){
   
       this.state.PartTitle =Response.Title;
       this.state.Copy =Response.Copy;
       this.setState(this.state)
  
    }

   Card(Contributer,Index){
      
    
       return (<div key={Index} className={'rounded-2xl flex justify-between  h-60 shadow flex-col relative '}>
           <div   className=' text-black text-lg font-normal text-center h-6 mb-3 w-full flex justify-center items-center'>
           {Contributer.name}
           </div>
           <div  className='h-50 bg-white   w-full flex overflow-scroll scrollbar-none'>
               <div  className='h-fit bg-white rounded p-4 text-black w-full flex justify-center items-center'>
               {Contributer.contributions}
               </div>
           </div>
           <div className='w-full rounded-b-2xl flex justify-center items-center text-center text-lg h-12 Bg-Gradiant-Blue text-white' onClick={(Event)=>CopyToClipboard(Contributer.email,Event.target)}>{this.state.Copy}</div>
       </div>
       )
   }
   state={
       Cards:"Loading",
       PartTitle:"Contributers",
       Copy:"Copy"
   }

   CreateCards(Contributers){
       
       this.state.Cards = Contributers.map((Contributer,index)=>{
        
           return this.Card(Contributer,index)
       })  
       this.setState(this.state)
   }
   
   ContributersGrid(){
       return (<div  className={'grid gap-4 h-fit justify-center grid-auto-cols   Grid-W-250 '}>
           {this.state.Cards}
           
       </div>)
   }
   PartTitle()
   {
       return <p className='w-fit Text-Gradiant-Blue mx-auto text-3xl'> {this.state.PartTitle}</p>
   }
   render()
   {
       return (<div id='Contributers' className='w-full h-fit pb-10 gap-28 flex  flex-col'>
       {this.PartTitle()}
       {this.ContributersGrid()}
       
        </div>)
   }
}
export default CContributers