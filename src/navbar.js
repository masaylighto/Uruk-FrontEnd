import React from "react";
import './css/navbar.css'
import './css/tailwind.css'
class CNavbar extends React.Component
{
    button(Name,Link)
    {
            return <button className="nav-btn-color nav-btn-raduis nav-btn-txt  font-medium w-24  h-8 p-1 text-center" >{Name}</button>
    }
    render(){
        return <div className="flex   flex-col-reverse sticky px-2 z-10 md:flex-row-reverse items-center w-full md:h-12 ">
            {this.button("Blog","here")}
            {this.button("Contacts","here")}
            {this.button("Contribute","here")}
            {this.button("Docs","here")}
            {this.button("Projects","here")}
            {this.button("Home","here")}
        </div>
    }
}
export default CNavbar