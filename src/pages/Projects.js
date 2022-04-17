import React from "react";
import "./../css/project.css";
import "./../css/tailwind.css";
import "./../css/shared.css";
import {Projects,Translation,FormatLink} from './../Config'

class CProjectCard extends React.Component {
	AnimateToTop(Event) {
		Event.target.animate(
			[
				{ height: "100%", opacity: "1" },
				{ height: "0", opacity: "0", padding: "0" },
			],
			{ duration: 200, iterations: 1, direction: "normal", fill: "forwards" }
		);
	}

	OnMouseOutDiscElement(Event) {
		Event.target.parentElement.children[0].animate(
			[
				{ height: "0", opacity: "0" },
				{ height: "100%", opacity: "1", padding: "1rem" },
			],
			{ duration: 200, iterations: 1, direction: "normal", fill: "forwards" }
		);
	}
	OnMouseOutNameElement(Event) {
		Event.target.style.height = "100%";
		Event.target.style.opacity = "1";
		Event.target.style.padding = "1rem";
	}
	render() {
		return (
			<div className="flex w-52 mx-1 relative move text-sm rounded-lg card-wave   border border-color   flex-col h-64">
				<div className={"block overflow-y-hidden h-5/6"}>
					<div
						onMouseLeave={this.OnMouseOutNameElement}
						onMouseEnter={this.AnimateToTop}
						className={
							"w-full overflow-hidden text-3xl flex h-full justify-center items-center text-center p-4 "
						}
					>
						{this.props.name}
					</div>
					<div
						onMouseLeave={this.OnMouseOutDiscElement}
						className={"w-full p-4 h-full overflow-scroll scrollbar-thin "}
					>
						{this.props.disc}
					</div>
				</div>
				<div
					onClick={(() => {
						window.location.href = this.props.link;
					}).bind()}
					className="w-full border-t rounded-b-lg flex justify-center items-center border-color btn-color mt-auto h-1/6"
				>
					<p>Download</p>
				</div>
			</div>
		);
	}
}

class CProjectsGrid extends React.Component {
    Scroller = React.createRef()    
	state={
		element:""
	}
 
     GetProject(){
		
        fetch(FormatLink(Projects.GetProjects,this.props.Langauge))
        .then(result=>result.json())
        .then(result =>this.ProccessResponse(result))
	 } 
	 ProccessResponse(Response){

        if(Response.State!=="Done"){
            return;
        }     
		let Projects = this.mapProjects(Response.Data);
		
		this.setState({element:Projects}) 

	 }
	mapProjects(Projects)
	{
		let index=0;
	
		return	Projects.map((element)=>{
			index++;
					return (

						<CProjectCard
						disc={element[2]}
						name={element[0]}
						link={element[1]}
						key={index}>
						</CProjectCard>
					)
		})

	}
	
    componentDidMount()
    {
		this.GetProject()
	
        let element = this.Scroller.current.parentElement;
       
        let Index=0;
        let PastOffset=0;
        setInterval(()=>{
           
            Index++;
            element.scrollBy({top:0,left:215,behavior:"smooth"})
          
            if(Index>=Projects.length-1 || PastOffset===element.scrollLeft)
            {
             
                element.scrollBy({top:0,left:element.offsetWidth*-1,behavior:"smooth"})
                Index=0;
            }
            PastOffset=element.scrollLeft
        },1500)
   
    }
    render(){

         
        return <div  ref={this.Scroller}
                className="flex justify   after:between gap-3 flex-row">
                {
                this.state.element
      
                
                }
                </div>

    }
}
class CProjects extends React.Component {
	GetTranslation()
	{
	
        fetch(FormatLink(Translation.GetPageTranslations,"Projects",this.props.Langauge))
        .then(result=>result.json())
        .then(result =>this.ProccessResponse(result))
	}
	ProccessResponse(Response)
	{
		if(Response.State!=="Done"){
			return;
		}
		let Title =Response.Data.Title;
		this.setState({Title})
	}
	state={
		Title:""
	}
	componentDidMount()
	{
		this.GetTranslation();
	}
	render() {
		return (
			<div id="Projects" className="flex items-center  m-auto flex-col  w-full    ">
				<p className="text-center   Special-text-color text-2xl my-10">
					{this.state.Title}
				</p>
				<div id="test" className="flex items-center overflow-x-scroll scrollbar-none  w-full">
			        <CProjectsGrid Langauge={this.props.Langauge}></CProjectsGrid>
				</div>
			</div>
		);
	}
}
export default CProjects;
