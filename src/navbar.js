import React from "react";
import './css/navbar.css'
import './css/tailwind.css'
class CNavbar extends React.Component
{   
    redirect(Link)
    {
        window.location.href=Link
    }
    button(Name,Link)
    {
            return <button onClick={(()=>{this.redirect(Link)}).bind()} value={Link} className="nav-btn-color nav-btn-raduis nav-btn-txt  font-medium w-24  h-8 p-1 text-center" >{Name}</button>
    }
    render(){
        return <div className="flex   flex-col-reverse sticky px-2 z-10 md:flex-row-reverse items-center w-full md:h-12 ">
            {this.button("Blog","Blog")}
            {this.button("Contacts","Contacts")}
            {this.button("Contribute","Contribute")}
            {this.button("Docs","Docs")}
            {this.button("Projects","Projects")}
            {this.button("Home","/")}
        </div>
    }
}
export default CNavbar