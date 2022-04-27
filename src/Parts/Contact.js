import React from 'react';
import '../Assets/css/tailwind.css'
import '../Assets/css/Shared.css'
import {FormatLink,Translation,ContactOptions} from '../Helpers/ApiEndPoints'
import {QuitIfInVaild, QuitReact} from '../Helpers/HelperFunctions'
let Colors=["#038ed56e","#0071b69e","#0056979e","#003d7a9e","#00255d9e"]
class CContacts extends React.Component{
    componentDidMount(){
        this.GetTranslation()
        this. GetContactOptions()
    }
   state={
        
    PartTitle:"",
    ContactsOption:""
    }
    
    GetTranslation()
    {
        fetch(FormatLink(Translation.GetPageTranslations,"Contact",this.props.Language))
        .then(result=>result.json())
        .then(result=>QuitIfInVaild(result))
        .then(result =>this.SetTranslation(result))
        .catch(()=>QuitReact("Failed to retrieve Data from the server"))
    }
    GetContactOptions()
    {
        fetch(FormatLink(ContactOptions.Get,this.props.Language))
        .then(result=>result.json())
        //.then(res=>console.log(res))
        .then(result=>QuitIfInVaild(result))
        .then(result =>this.ContactsOptions(result))
    }

    SetTranslation(Data){

        this.state.PartTitle=Data.Title
        this.setState(this.state)
    }
    ContactsOptions(Options)
    {   
        let Index=0;
        let OptionsCard=[]
        for (const Option of Options) 
        {       
               
            OptionsCard[Index]=this.OptionNode(Option.option,Index++)
        }
        this.state.ContactsOption=OptionsCard
      
        this.setState(this.state)
    }
    KeepIndexInRange(Index){
        //this to keep the index that used to determine the color in the Color Array Range 
        //through subtracting the lenghth from the index continuously if the index was larger than the range
       let ColorIndex=Index
       while(ColorIndex>Colors.length-1){
           
           ColorIndex-=Colors.length-1;
       }
       return ColorIndex
   }
    OptionNode(Option,Index){
        
        return          <li key={Index}  className='text-white Bg-Gradiant-Blue  rounded-2xl hover-Darken  shadow w-fit p-3 '>
            <span className='text-white text-xl'>
              {Option}
            </span>
         </li>
         
    }
    PartTitle(){
        return <p className='w-fit  Text-Gradiant-Blue mx-auto text-3xl'> {this.state.PartTitle}</p>
    }
    render()
    {
        return <div  id='Contacts' className='w-full  py-10 justify-evenly bg-white flex  flex-col '>
        {this.PartTitle()}   
        <div className='flex flex-col gap-1 mx-5'>
         {this.state.ContactsOption}
         </div> 
        </div>
    }
}
export default CContacts