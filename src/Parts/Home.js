import React from 'react';
import '../Assets/css/tailwind.css'
import '../Assets/css/Home.css'
import '../Assets/css/Shared.css'
import {FormatLink,Translation} from '../Helpers/ApiEndPoints'
import {QuitIfInVaild, QuitReact} from '../Helpers/HelperFunctions'
const uruk_voice = require("./../Assets/Audio/uruk-sound.ogg");
class CHome extends React.Component{
    componentDidMount(){
        this.GetTranslation()
    }
   state={
        Title:"",
        Desc:"",
        ReadMoreBtn:""
    }
    UrukVoice(){

        return <button className="player-icon bg-cover w-10 h-10 mx-auto" onClick={(e)=>{e.target.children[0].play()}}> 
            <audio id="player"    src={uruk_voice}>                        
            If you are reading this, it is because your browser does not support the audio element.
            </audio>
         </button>
    }
    GetTranslation()
    {
        fetch(FormatLink(Translation.GetPageTranslations,"Home",this.props.Language))
        .then(result=>result.json())
        .then(result=>QuitIfInVaild(result))
        .then(result =>this.SetTranslation(result))
        .catch(()=>QuitReact("Failed to retrieve Data from the server"))
    }
    SetTranslation(Data){
        this.setState(Data)
    }
    Text()
    {
        return <p className='px-7 bg-white mx-auto'>
               {this.state.Desc}
        </p>
    }
    ReadMoreBtn()
    {
        return <a></a>
    }
    Logo()
    {
        return <div className='Logo bg-cover  w-56 h-32 mx-auto'></div>
    }
    CenteredDiv()
    {
        
        return (
             <div className='W-500 z-20 py-5 shadow flex mt-40 mb-10 flex-col justify-evenly items-center   mx-auto rounded-xl bg-white'>
               
                <this.Logo/>
                {this.Text()}
                <this.UrukVoice/>
            
            </div>
        )
        
    }
  
    render()
    {
        return <div className='w-full flex  flex-col Bg-Gradiant-Blue'>
       {this.CenteredDiv()}
      
      
        </div>
    }
}
export default CHome