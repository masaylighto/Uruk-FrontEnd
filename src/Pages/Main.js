import React from 'react';
import CHome from '../Parts/Home';
import CNavbar from '../Parts/Navbar';
import '../Assets/css/tailwind.css'
import '../Assets/css/Shared.css'
import  Projects  from '../Parts/Projects';
import {Wave} from '../Components/Varity'
class CMain extends React.Component{
    render()
    {
    return ( <div className='flex items-center scrollbar-none w-full flex-col'>
                 <CNavbar Language={"English"}/>
                 <CHome Language={"English"}/>
                 <Wave/>
                 <Projects Language={"English"}></Projects>
            </div>
        )
    }
}
export default CMain