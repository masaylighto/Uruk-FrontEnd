import React from 'react';
import '../Assets/css/tailwind.css'
import '../Assets/css/Home.css'
import '../Assets/css/Shared.css'
import { ReactComponent as Logo } from '../Assets/Icons/logo.svg'
import { FormatLink, Translation } from '../Helpers/ApiEndPoints'
import { QuitIfInVaild, QuitReact } from '../Helpers/HelperFunctions'
const uruk_voice = require("./../Assets/Audio/uruk-sound.ogg");

class CHome extends React.Component {
    componentDidMount() {
        this.GetTranslation()
    }
    state = {
        Title: "",
        Desc: "",
        ReadMoreBtn: ""
    }
    UrukVoice() {

        return <button className="player-icon bg-cover w-10 h-10 mx-auto" onClick={(e) => { e.target.children[0].play() }}>
            <audio id="player" src={uruk_voice}>
                If you are reading this, it is because your browser does not support the audio element.
            </audio>
        </button>
    }
    GetTranslation() {
        fetch(FormatLink(Translation.GetPageTranslations, "Home", this.props.Language))
            .then(result => result.json())
            .then(result => QuitIfInVaild(result))
            .then(result => this.SetTranslation(result))
            .catch(() => QuitReact("Failed to retrieve Data from the server"))
    }
    SetTranslation(Data) {
        this.setState(Data)
    }
    Text() {
        return <p className='px-7 text-gray-600  md:w-4/6    w-full '>
            {this.state.Desc}
        </p>
    }
    ReadMoreBtn() {
        return <a></a>
    }
    Logo() {
        return <Logo className='bg-cover bg-no-repeat     h-80' style={{ width: 340 }}></Logo>
    }
    CenteredDiv() {

        return (
            <div className='flex flex-row h-96'>


            </div>
        )

    }

    render() {
        return <div id='Home' className='w-full z-10 items-center flex justify-center  py-5  h-fit Bg-Gradiant-Blue'>
            <div className='flex  justify-center mt-5 items-center flex-col md:w-1/2 '>             
                    <this.Logo />               
                <div className='flex flex-col justify-center items-center'>
                    {this.Text()}
                    <this.UrukVoice />
                </div>

            </div>
        </div>
    }
}
export default CHome