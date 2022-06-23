import React from 'react';
import '../Assets/css/tailwind.css'
import '../Assets/css/Contribution.css'
import '../Assets/css/Shared.css'
import {FormatLink,Translation,Contributors} from '../Helpers/ApiEndPoints'
import {QuitIfInVaild, QuitReact,CopyToClipboard} from '../Helpers/HelperFunctions'
import {LeftArrow,RightArrow} from '../Components/Varity'
let Colors=["#91DAFF","#69E8FC","#5CF4E6","#80FCC1","#B9FD95","#F9F871"]
let DarkenColors=["#038ED5","#00ADDF","#00C9CF","#14DFAD","#9CF087"]
class CContributers extends React.Component{
    KeepIndexInRange(Index){
        //this to keep the index that used to determine the color in the Color Array Range 
        //through subtracting the lenghth from the index continuously if the index was larger than the range
       let ColorIndex=Index
       while(ColorIndex>Colors.length-1){
           
           ColorIndex-=Colors.length-1;
       }
       return ColorIndex
   }

   componentDidMount(){
       this.GetTranslation()
       this.GetContributers()
       
   }
   GetContributers(){
        //Take =9
        //Skip 0
        //Pagination Parameters       
       fetch(FormatLink(Contributors.GetContributors,this.props.Language,9,0))      
       .then(result=>result.json())
       .then(result=>QuitIfInVaild(result))
       .then(result =>this.CreateCards(result))
       .catch(()=>QuitReact("Failed to retrieve Data from the server"))
    } 
    GetTranslation()
    {
    
        fetch(FormatLink(Translation.GetPageTranslations,"Contributers",this.props.Language))
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
    PreviousContributers()
    {
        this.LastCardIndex=0 
        this.GetContributers()
    }
    NextContributers()
    {
        this.GetContributers()
    }
   Card(Contributer,Index){
    let color=Colors[this.KeepIndexInRange(Index)]
    let Darkcolor=DarkenColors[this.KeepIndexInRange(Index)]
    return (<div  key={Index} style={{boxShadow:"0px 0px  10px 0px"+color+"5a"}} className={"shadow rounded flex h-40 justify-around p-4 flex-col"}  >
        <p className='w-fit' style={{color:Darkcolor}}>{Contributer.name}</p>
        <p style={{fontSize:"0.800rem"}} className='mt-3'>{Contributer.contributions} </p>
        <p className='text-xs ml-auto mt-auto'   onClick={(Event)=>CopyToClipboard(Contributer.email,Event.target)}>🔗</p>
        </div>)
      
   }
   state={
       Cards:"",
       PartTitle:"Contributers",
       Copy:"Copy"
   }

   CreateCards(Contributers){
       if (Contributers==""){
        return
       }
       this.state.Cards = Contributers.map((Contributer,index)=>{
        
           return this.Card(Contributer,index)
       })  
       this.setState(this.state)
   }
   LastCardIndex=0
   ContributersGrid(){
       return (<div  className={'grid gap-20 md:w-5/6  h-fit justify-center grid-auto-cols   Grid-W-250 '}>
           {this.state.Cards}
           
       </div>)
   }
   PartTitle()
   {
       return <p className='w-fit  Text-Gradiant-Blue mx-auto text-3xl'> {this.state.PartTitle}</p>
   }
   render()
   {
       return (<div id='Contributers' className='w-full h-fit lg:mt-0 mt-20 pb-10 gap-28 flex  flex-col'>
       {this.PartTitle()}
       <div className='flex flex-row justify-evenly'>
         <button onClick={()=>this.PreviousContributers()} className='w-10  my-auto  text-gray-300 h-10 text-3xl bg-transparent'>{this.props.Language==="العربية"?"ᐳ":"ᐸ"}</button>
      
          {this.ContributersGrid()}
       <button  onClick={()=>this.NextContributers()}   className='w-10 my-auto  h-10 text-gray-300 text-3xl bg-transparent'>{this.props.Language==="العربية"?"ᐸ":"ᐳ"} </button>
       </div>
        </div>)
   }
}
export default CContributers
