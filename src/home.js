import React from "react";
import './css/home.css'
import './css/tailwind.css'

const uruk_voice = require("./etc/uruk-sound.ogg");


class CHome extends React.Component {

    Logo() {
        return <div className="Logo mt-10 bg-no-repeat bg-contain"  />
    }
  
    AboutUs() {
        return <div className="flex about-us-contaner flex-col items-center justify-center ">
            <div className=" about-div rounded-xl ">
                <div className="flex flex-col p-5 rounded-xl  about-div-inside">
                    <p>The Uruk project is a highly motivated community of people sharing a strong interest in free culture and free society. We all help each other and share the common purpose of supporting and building free projects. The Uruk project provides a list of goals our members follow in order to promote and strengthen free (as in freedom!) software and culture.
                        The Uruk name was chosen in honor of Uruk (Warka) city in Iraq
                        To indicate how the word "uruk" should be pronounced, we included an audio file
                    </p>
                   
                   <button onClick={(e)=>{e.target.children[0].play()}}> play <audio id="player"    src={uruk_voice}>                        
                        If you are reading this, it is because your browser does not support the audio element.
                        </audio> </button>
                </div>
            </div>
            <button className="w-44 rounded mt-2 h-14 text-white read-more-btn"> Read More</button>
        
        </div>
    }
    render() {
        return <div className="flex sticky z-10 justify-between flex-row-reverse items-center w-full h-full ">
            <this.Logo />
            <this.AboutUs />
        </div>
    }
}
export default CHome