import React from "react";
import './css/contribute.css'
import './css/tailwind.css'
var List = [
    "All of our contributions respect software freedom",
    "Non-free software may slip into our system, despite all of our efforts. We will be vigilant, and we will remove non-free software as soon as we find it",
    "We demand there to be respect among community members",
    "Do not discriminate against people based on age, gender, sex, sexual orientation, disability, religion, ideology, ideas, social class, nationality, race, intelligence, or any analogous grounds",
    "Do not curse or use harsh language here. Social norms differ from place to place; harsh language can deter people from our community",
    "Do not insult others here. Disagree and challenge ideas instead"
]
var Rows = [
    { Name: 'Uruk GNU/Linux', Link: '#', Disc: 'Uruk GNU/Linux is a fully free operating system for home users, small enterprises and educational centers based on Trisquel.' },
    { Name: 'Uruk Cleaner', Link: '#', Disc: 'Uruk Cleaner is a program that you can use to clean your system from cache files and logs.' },
    { Name: 'UPMS', Link: '#', Disc: 'UPMS(Uruk Package Managers Simulator). This program can simulate several common package managers commands, which means you can install, uninstall, update and remove the packages using any package manager you prefer to get the work done with.' },
    { Name: 'Uruk Ocr Server', Link: '#', Disc: 'A Simple, small, powerful OCR web server used to convert images to text.' },
    { Name: 'Irc log recorder', Link: '#', Disc: 'The Irc log recorder is an irc bot that logs the entire communication of an irc channel. It is equipped with a web server to enable users to access the logs from a web browser and/or telnet ' },
    { Name: 'Masalla Icon Theme', Link: '#', Disc: 'Icon theme for *NIX OS inspired by the modern flat design trend. .' },


]

class Ccontribute extends React.Component {
    // this map will create the list of Guide line element in the ui
    Contribute_Guide_Line() {

        return List.map((Line) => {
            return <div className="guide-line-text-size guide-line-color w-fit barely-Bg-transparent rounded-2xl font-simebold p-4 shadow ">{Line}</div>
        })
    }
    //create List of Projects row 
    Projects_Row() {
        return Rows.map((Row) => {
            return this.Row(Row.Link, Row.Name, Row.Disc, "")
        })
    }
    //represent the element that represnt the project row in the project table
    Row(Link, Name, Disc, Justify) {
        //centJustifyer element is element represnt how the flex is Justify and is set by the caller
        return <div className="flex table-text-size  flex-row">
            <div className={"border w-40   p-4 items-center flex " + Justify} >
                <a href={Link} >
                    {Name}
                </a>
            </div>
            <div className={"border   p-4 w-full items-center flex " + Justify}>
                {Disc}
            </div>
        </div>
    }
    //create a header for the table
    Projects_Table_Header() {

        return this.Row("", "Name", "Disk", "justify-center")

    }
    //create table that repersent the ui
    Projects_Table() {
        return <div className="flex w-5/6 gap-1 barely-Bg-transparent mx-auto mt-10 rounded p-2 flex-col shadow border">
            {this.Projects_Table_Header()}
            {this.Projects_Row()}
        </div>
    }
    Logo() {
        return <div className="Logo z-10 fixed m-auto top-0 left-0 bottom-0 right-0 opacity-20 bg-no-repeat bg-contain" />
    }

    render() {
        return (
            <div className="flex overflow-y-scroll page-hight scrollbar-thin   ml-3 flex-col">
                
                <p className="shadow barely-Bg-transparent z-20 sticky  rounded-t-2xl p-3 w-fit">How To Contribute</p>
                <p className="shadow barely-Bg-transparent z-20 sticky  rounded-b-2xl  p-3 w-fit">If you want to contribute, read this first:</p>
                <div className="flex z-20 sticky  flex-col pl-4 mt-2">
                    <this.Contribute_Guide_Line />
                </div>
                <div className="flex z-20 sticky  flex-col">
                    <p className=" text-center text-2xl mt-5">Projects</p>
                    {this.Projects_Table()}
                </div>
                <this.Logo />
            </div>)
    }

}
export default Ccontribute