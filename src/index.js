import React from 'react';
import ReactDOM from 'react-dom';
import CNavbar from './navbar';
import reportWebVitals from './reportWebVitals';
import CHome from './home'
import CProjects from './Projects';
import Ccontribute from './Contribute';
import Ccontacts from './Contacts';
ReactDOM.render(
  <React.StrictMode> 
    <CNavbar/>
    <CHome></CHome>    
    <CProjects></CProjects>
    <Ccontribute></Ccontribute>
    <Ccontacts></Ccontacts>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
