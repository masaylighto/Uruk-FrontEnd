import React from "react";
import CHome from "./home";
import CProjects from "./Projects";
import Ccontribute from './Contribute'
import Ccontacts from "./Contacts";
import { Route,BrowserRouter,Routes } from "react-router-dom";
import Cblog from "./Blog";

class CRouter extends React.Component
{   
   
    render()
    {
       return <BrowserRouter>
       <Routes>
         <Route path="/" element={<CHome />}/>
         <Route path="/Projects" element={<CProjects />} />  
         <Route path="/Contacts" element={<Ccontacts />} />  
         <Route path="/Blog" element={<Cblog />} />  
         <Route path="/Contribute" element={<Ccontribute />} />  
         <Route path="/Projects" element={<CProjects />} />     
       </Routes>
     </BrowserRouter>
    }
}
export default CRouter