import React from 'react';
import CHome from '../Parts/Home';
import CNavbar from '../Parts/Navbar';
import '../Assets/css/tailwind.css'
import '../Assets/css/Shared.css'
import  Projects  from '../Parts/Projects';
import  CContribution  from '../Parts/Contribution';
import {Wave} from '../Components/Varity'
import CContributers from '../Parts/Contributers';
class CMain extends React.Component{
    render()
    {
    return ( <div className='flex items-center scrollbar-none w-full flex-col'>
                 <CNavbar Language={"English"}/>
                 <CHome Language={"English"}/>
                 <Wave/>
                 <Projects Language={"English"}></Projects>
                 <CContribution Language={"English"}></CContribution>
                 <CContributers Language={"English"}></CContributers>
            </div>
        )
    }
}
export default CMain