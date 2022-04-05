import React from "react";
import "./css/contribute.css";
import "./css/tailwind.css";
import "./css/shared.css";

var List = [
  "All of our contributions respect software freedom",
  "Non-free software may slip into our system, despite all of our efforts. We will be vigilant, and we will remove non-free software as soon as we find it",
  "We demand there to be respect among community members",
  "Do not discriminate against people based on age, gender, sex, sexual orientation, disability, religion, ideology, ideas, social class, nationality, race, intelligence, or any analogous grounds",
  "Do not curse or use harsh language here. Social norms differ from place to place; harsh language can deter people from our community",
  "Do not insult others here. Disagree and challenge ideas instead",
];
var Rows = [
  {
    Name: "Uruk GNU/Linux",
    Link: "#",
    Disc: "Uruk GNU/Linux is a fully free operating system for home users, small enterprises and educational centers based on Trisquel.",
  },
  {
    Name: "Uruk Cleaner",
    Link: "#",
    Disc: "Uruk Cleaner is a program that you can use to clean your system from cache files and logs.",
  },
  {
    Name: "UPMS",
    Link: "#",
    Disc: "UPMS(Uruk Package Managers Simulator). This program can simulate several common package managers commands, which means you can install, uninstall, update and remove the packages using any package manager you prefer to get the work done with.",
  },
  {
    Name: "Uruk Ocr Server",
    Link: "#",
    Disc: "A Simple, small, powerful OCR web server used to convert images to text.",
  },
  {
    Name: "Irc log recorder",
    Link: "#",
    Disc: "The Irc log recorder is an irc bot that logs the entire communication of an irc channel. It is equipped with a web server to enable users to access the logs from a web browser and/or telnet ",
  },
  {
    Name: "Masalla Icon Theme",
    Link: "#",
    Disc: "Icon theme for *NIX OS inspired by the modern flat design trend. .",
  },
];

class CTerms extends React.Component {

  ShowTerms(Element) {
    Element.target.animate([{ maxWidth: "14rem" }, { maxWidth: "60%" }], {
      duration: 100,
      direction: "normal",
      fill: "forwards",
    });
    Element.target.children[1].animate(
      [{ maxHeight: "0px" }, { maxHeight: "500px" }],
      { duration: 300, direction: "normal", fill: "forwards" }
    );
  }
  HideTerms(Element) {
    Element.target.animate([{ maxWidth: "60%" }, { maxWidth: "14rem" }], {
      duration: 100,
      direction: "normal",
      fill: "forwards",
    });
    Element.target.children[1].animate(
      [{ maxHeight: "500px" }, { maxHeight: "0px" }],
      { duration: 300, direction: "normal", fill: "forwards" }
    );
  }
  render() {
    return (
      <div
        onMouseEnter={this.ShowTerms}
        onMouseLeave={this.HideTerms}
        className="guide-line-text-size MaxWidth14rem  flex flex-col w-fit ml-14  mt-6 shadow rounded-2xl  p-4   ">
        <div>Terms</div>
        <p className={"MaxHeightZero overflow-hidden"}>
          If you have read and agreed on the above points , and would like to
          help us, then the next question is: what would you like to do? You can
          help the Uruk project in many ways; we need people to write
          documentation, such as books, reference guides and online info; we
          also need people to write software, do research, and many other tasks.
          Because of all the different tasks at hand, we are confident that your
          particular skills can help the Uruk Project; you don't have to be an
          experienced software developer to help us. What skills and experience
          do you have? Do you have experience writing large and complex
          technical documents? Do you speak several human languages? Do you have
          a unique skill? Are you a Unix hacker, or are you still learning?
          Obviously, the answers to these questions will determine the sorts of
          jobs that you may want to attempt to do. For example, if you've never
          written any documentation then you probably don't want to attempt to
          write a C++ STL tutorial or reference. If you have little mathematical
          expertise then you probably won't want to work on a statistical
          analysis package. If you find any issue,you can report it on
        </p>

        <a href="https://uruk.tuxfamily.org/bt/login_page.php" className="text-blue-300">
          Uruk Issue Tracker
        </a>
      </div>
    );
  }
}
class Ccontribute extends React.Component {
  // this map will create the list of Guide line element in the ui
  Contribute_Guide_Line() {
     
    return List.map((Line) => {
       
      return (
        <div className="guide-line-text-size font-normal  guide-line-size h-12  rounded-2xl font-simebold p-4 shadow-sm ">
          {Line}
        </div>
      );
    });
  }
  //create List of Projects row
  Projects_Row() {
      let index=0;
    return Rows.map((Row) => {
        index++;
      return this.Row(Row.Link, Row.Name, Row.Disc,(index%2==0));
    });
  }
  //represent the element that represent the project row in the project table
  Row(Link, Name, Disc,Colored) {
    return (
      <div className={"flex flex-row    margin-updown-hover table-text-size  "+ ((Colored)?"GradientHeader":"")}>
        <div
          className={"border-t border-b  w-40    p-4 items-center flex "}>
          <a href={Link}>{Name}</a>
        </div>
        <div className={"border-t border-b    p-4 w-full items-center flex "}>
          {Disc}
        </div>
      </div>
    );
  }
  //create a header for the table
  Projects_Table_Header() {
    return (
      <div className="flex   GradientLine table-text-size flex-row">
        <div className={" w-40   justify-center  p-4 items-center flex "}>
          <p>Name</p>
        </div>
        <div className={"border-t border-b  pr-24 justify-center    w-full items-center flex "}>
          <p>Description</p>
        </div>
      </div>
    );
  }
  //create table that represent the ui
  Projects_Table() {
    return (
      <div className="flex w-full gap-1  px-9 mt-10   flex-col  ">
        {this.Projects_Table_Header()}
        {this.Projects_Row()}
      </div>
    );
  }
  Logo() {
    return (
      <div className="Logo z-10 fixed m-auto top-0 left-0 bottom-0 right-0 opacity-20 bg-no-repeat bg-contain" />
    );
  }

  render() {
    return (
      <div className="flex H100Vmin mt-10   page-hight    flex-col">
        <p className="  Special-text-color text-2xl mt-10  mx-auto    w-fit">
          How To Contribute
        </p>
        <p className=" Special-text-color  mb-10 mx-auto   w-fit">
          If you want to contribute, read this first:
        </p>
        <div className="flex flex-col ml-10 gap-3  mt-2">
          <this.Contribute_Guide_Line />
        </div>
        <CTerms />
        <div className="flex   flex-col">
          <p className=" text-center   Special-text-color text-2xl my-10">Projects</p>
          {this.Projects_Table()}
        </div>
      </div>
    );
  }
}
export default Ccontribute;
