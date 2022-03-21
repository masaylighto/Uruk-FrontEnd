import React from "react";
import './css/contribute.css'
import './css/tailwind.css'
var List=[
    "All of our contributions respect software freedom",
    "Non-free software may slip into our system, despite all of our efforts. We will be vigilant, and we will remove non-free software as soon as we find it",
    "We demand there to be respect among community members",
    "Do not discriminate against people based on age, gender, sex, sexual orientation, disability, religion, ideology, ideas, social class, nationality, race, intelligence, or any analogous grounds",
    "Do not curse or use harsh language here. Social norms differ from place to place; harsh language can deter people from our community",
    "Do not insult others here. Disagree and challenge ideas instead"
]

class Ccontribute extends React.Component
{   
    Contribute_Guide_Line()
    {
       
        return List.map((Line)=>{
            return  <div className="guide-line-text-size guide-line-color w-fit rounded-2xl font-simebold p-4 shadow ">{Line}</div>          
         })
    }
    render()
    {
       return <div className="flex sticky z-10  ml-3 flex-col">
           <p className="shadow rounded-t-2xl p-3 w-fit">How To Contribute</p>
           <p className="shadow rounded-b-2xl  p-3 w-fit">If you want to contribute, read this first:</p>
                <div className="flex flex-col pl-4 mt-2">
                 <this.Contribute_Guide_Line />
                </div>
       </div>
    }
    
}
export default Ccontribute