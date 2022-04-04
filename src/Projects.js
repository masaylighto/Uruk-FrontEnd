
import { list } from "postcss";
import React,{useState} from "react";
import './css/project.css'
import './css/tailwind.css'



var Projects=[
    {
        name:"Uruk Cleaner",
        disc:"Uruk Cleaner is a program that you can use to clean your system from cache files and logs",
        link:"https://notabug.org/alimiracle/uruk-cleaner",
    },
    {
        name:"UPMS",
        disc:"UPMS(Uruk Package Managers Simulator). This program can simulate several common package managers commands, which means you can install, uninstall, update and remove the packages using any package manager you prefer to get the work done with.",
        link:"https://notabug.org/alimiracle/uruk-cleaner",
    },
    {
        name:"Uruk GNU/Linux",
        disc:"Uruk GNU/Linux is a fully free operating system for home users, small enterprises and educational centers based on Trisquel.",
        link:"https://notabug.org/alimiracle/uruk-cleaner",
    }, 
    {
        name:"Uruk Ocr Server",
        disc:"A Simple, small, powerful OCR web server used to convert images to text.",
        link:"https://notabug.org/alimiracle/uruk-cleaner",
    }, 
    {
        name:"Irc log recorder",
        disc:"The Irc log recorder is an irc bot that logs the entire communication of an irc channel. It is equipped with a web server to enable users to access the logs from a web browser and/or telnet ",
        link:"https://notabug.org/alimiracle/uruk-cleaner",
    }, 
    {
        name:"Masalla Icon Theme",
        disc:"Icon theme for *NIX OS inspired by the modern flat design trend. .",
        link:"https://notabug.org/alimiracle/uruk-cleaner",
    }, 
    {
        name:"Uruk Cloud IDE",
        disc:"The UruCloudIDE Project is a free as in freedom cross platform integrated development environment running primarily, but not exclusively, on the free and open source cloud software. This piece of software is highly recommended for institutions, software development companies and developers. The project is still in beta",
        link:"https://notabug.org/alimiracle/uruk-cleaner",
    },  
    {
        name:"Uruk Project website",
        disc:"he source code for the Uruk project and the Uruk GNU/Linux website, based on the Peers website source code",
        link:"https://notabug.org/alimiracle/uruk-cleaner",
    }, 
    {
        name:"Rose Crypt",
        disc:"Promote and facilitate encryption and decryption of files using AES",
        link:"https://notabug.org/alimiracle/uruk-cleaner",
    }, 
    {
        name:"quickpass",
        disc:"quickpass is a command-line password manager and random password generator using just the commonly available Unix utilities.",
        link:"https://notabug.org/alimiracle/uruk-cleaner",
    }, 
    {
        name:"Clara",
        disc:"Server Backup and Notifications bot",
        link:"https://notabug.org/alimiracle/uruk-cleaner",
    },   
    {
        name:"UCC",
        disc:"Uruk Control Center, Simple System Control Center for GNU/Linux System ( Only for XFCE4 and MATE DE for now ).",
        link:"https://notabug.org/alimiracle/uruk-cleaner",
    }, 
    {
        name:"Delta",
        disc:"	File Sharing system via network.",
        link:"https://notabug.org/alimiracle/uruk-cleaner",
    }, 
        
]
class CProjectCard extends React.Component {
    constructor(props)
    {
       super(props)
    }
    AnimateToTop(Event)
    {
        Event.target.animate([ { height: '100%',opacity:"1",},
        { height: '0',opacity:"0" ,padding:"0"    }],{  duration: 200,iterations: 1,direction:"normal" ,fill:"forwards"})
        
     
    
    }
    
    OnMouseOutDiscElement(Event)
    {
     Event.target.parentElement.children[0].animate([ { height: '0',opacity:"0",},
        { height: '100%',opacity:"1" ,padding:"1rem"    }],{  duration: 200,iterations: 1,direction:"normal" ,fill:"forwards"})    
    }
    OnMouseOutNameElement(Event)
    {
        Event.target.style.height= '100%'
        Event.target.style.opacity= '1'
        Event.target.style.padding= '1rem'
    }
   
    
    
    render(){
       return <div className="flex mx-1 relative move text-sm rounded-lg card-wave  overflow-hidden border border-color shadow-lg  flex-col h-64">
           <div className={"block overflow-hidden h-5/6"}>
       <div  onMouseLeave={this.OnMouseOutNameElement}  onMouseEnter={this.AnimateToTop} className={"w-full overflow-hidden text-3xl flex h-full justify-center items-center text-center p-4 "}>{this.props.name}</div>
        <div onMouseLeave={this.OnMouseOutDiscElement} className={"w-full h-full overflow-scroll scrollbar-thin "}>{this.props.disc}</div>
        </div>
       <div onClick={(()=>{window.location.href=this.props.link}).bind()} className="w-full border-t rounded-b-lg flex justify-center items-center border-color btn-color mt-auto h-1/6"><p>Download</p></div>
   </div>
   }           
}
class CProjects extends React.Component {

    CreateRows(){
        
       return Projects.map((row)=>{
           //this will be used to change the   postion type of the project name
  
            return <CProjectCard disc={row.disc} name={row.name} link={row.link} ></CProjectCard>
        })
    }
    render() {
        return <div className="flex  items-center full-screan-Height  m-auto flex-col    overflow-scroll scrollbar-none">
              <p className="text-center text-3xl  Special-text-color my-10">Uruk Projects</p>
                <div className="grid justify-between gap-y-5 g w-5/6 grid-auto-column">
                {this.CreateRows()}
                
                </div>
        </div>
    }
}
export default CProjects