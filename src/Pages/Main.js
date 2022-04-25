import React from 'react';
import CHome from '../Parts/Home';
import CNavbar from '../Parts/Navbar';
import '../Assets/css/tailwind.css'
import '../Assets/css/Shared.css'
class CMain extends React.Component{
    render()
    {
    return ( <div className='flex items-center w-full flex-col'>
                 <CNavbar Language={"English"}/>
                 <CHome Language={"English"}/>
            </div>
        )
    }
}
export default CMain