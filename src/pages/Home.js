import React from "react";
import './../css/home.css'
import './../css/tailwind.css'
import './../css/shared.css'
const uruk_voice = require("./../etc/uruk-sound.ogg");


class CHome extends React.Component {
    componentDidMount()
    {

        
    }
    Logo() {
        
        return <div className="Logo bg-no-repeat bg-contain"  />
    }
  
    AboutUs() {
        return <div className="flex about-us-contaner flex-col items-center justify-center ">
            <p className=" Logo_text -mt-10 mb-1">Uruk</p>
            <div className=" rounded-xl ">
                <div className="flex flex-col p-5 rounded-xl  about-div-inside">
                    <p>
    
                    </p>
                   
                   <button className="player-icon w-10 h-10 mx-auto" onClick={(e)=>{e.target.children[0].play()}}>  <audio id="player"    src={uruk_voice}>                        
                        If you are reading this, it is because your browser does not support the audio element.
                        </audio> </button>
                </div>
            </div>
            <button onClick={(()=>{window.location.href='https://en.wikipedia.org/wiki/Uruk'}).bind()} className="w-44 rounded mt-2 h-14 text-white read-more-btn"> Read More</button>
        
        </div>
    }
    render() {
        return <div  className="flex H100Vmin flex-col lg:flex-row-reverse gap-3 sticky z-10 justify-between  items-center w-full md:h-full ">
            <this.Logo />
            <this.AboutUs />
        </div>
    }
}
export default CHome