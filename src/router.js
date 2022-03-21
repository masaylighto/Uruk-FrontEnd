import React from "react";
import CHome from "./home";
import CProjects from "./Projects";
import { Route,BrowserRouter,Routes } from "react-router-dom";

class CRouter extends React.Component
{   
   
    render()
    {
       return <BrowserRouter>
       <Routes>
         <Route path="/" element={<CHome />}/>
         <Route path="/Projects" element={<CProjects />} />     
       </Routes>
     </BrowserRouter>
    }
}
export default CRouter