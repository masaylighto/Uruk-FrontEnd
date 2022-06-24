import React from 'react';
import '../Assets/css/tailwind.css'
import '../Assets/css/Contribution.css'
import '../Assets/css/Shared.css'
import {FormatLink,Translation,ProjectsMember} from '../Helpers/ApiEndPoints'
import {QuitIfInVaild, QuitReact,CopyToClipboard} from '../Helpers/HelperFunctions'
import { Tringle } from '../Components/Varity';

class CMembers extends React.Component{
    

   componentDidMount(){
       this.GetTranslation()
       this.GetContributers()
       
   }
   GetContributers(){

       fetch(FormatLink(ProjectsMember.GetMember,this.props.Language))
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

   Card(Members,Index){
      
    
       return (<div key={Index} style={{background:"#ffffffd1"}} className={'rounded flex justify-between  h-60 shadow flex-col relative '}>
           <div   className=' text-black mt-3 text-base text-center h-6 mb-3 w-full flex justify-center items-center'>
           {Members[0]}
           </div>
           <div  className='h-50    w-full flex overflow-scroll scrollbar-none'>
               <div  className='h-fit  text-sm rounded p-4 text-black w-full flex justify-center items-center'>
               {Members[1]}
               </div>
           </div>
           <div className='w-full rounded-b flex justify-center items-center text-center text-base h-12 Bg-Gradiant-Blue text-white' onClick={(Event)=>CopyToClipboard(Members[2],Event.target)}>{this.state.Copy}</div>
       </div>
       )
   }
   state={
       Cards:"Loading",
       PartTitle:"Members",
       Copy:"Copy"
   }

   CreateCards(members){
       
       this.state.Cards = members.map((member,index)=>{
        
           return this.Card(member,index)
       })  
       this.setState(this.state)
   }
   
   ContributersGrid(){
       return (<div  className={'grid gap-20 h-fit justify-center grid-auto-cols   Grid-W-250 '}>
           {this.state.Cards}
           
       </div>)
   }
   PartTitle()
   {
       return <p className='w-fit  mb-12 md:mt-52 mt-10 text-white mx-auto text-3xl'> {this.state.PartTitle}</p>
   }
   render()
   {
       return (<div id='members' className='w-full bg-gradiant-blue-Cliped-up relative  h-fit pb-10  flex  flex-col'>
   
       {this.PartTitle()}
       {this.ContributersGrid()}
       
        </div>)
   }
}
export default CMembers
