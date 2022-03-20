import React from "react";
import './css/background.css'
import './css/tailwind.css'
class Cbackground extends React.Component
{
    white_div()
    {
        return <div className="bg-svg w-full h-full bg-cover bg-norepeat"></div>
    }
    overlay_div()
    {
        return <div className="fixed overlay left-0 right-0 top-0 bottom-0"></div>
    }
    bg()
    {

        return <div className="fixed  uruk-bg-color left-0 right-0 top-0 flex justify-center items-center bottom-0">{ this.overlay_div()}{this.white_div()} </div>
    }
    render(){
        return this.bg()
    }
}
export default Cbackground