import React from 'react';
import CHome from '../Parts/Home';
import CNavbar from '../Parts/Navbar';
import '../Assets/css/tailwind.css'
import '../Assets/css/Shared.css'
import  Projects  from '../Parts/Projects';
import  CContribution  from '../Parts/Contribution';
import {Wave} from '../Components/Varity'
import CContributers from '../Parts/Contributers';
import CMembers from '../Parts/Members';
class CMain extends React.Component{
    render()
    {
    return ( <div dir={this.props.Language==="العربية"?"rtl":"ltr"}  className='flex items-center scrollbar-none w-full flex-col'>
                 <CNavbar Language={this.props.Language}/>
                 <CHome Language={this.props.Language}/>
                 <Wave/>
                 <Projects Language={this.props.Language}></Projects>
                 <CContribution Language={this.props.Language}></CContribution>
                 <CContributers Language={this.props.Language}></CContributers>
                 <CMembers Language={this.props.Language}></CMembers>
            </div>
        )
    }
}
export default CMain