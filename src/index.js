import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import CNavbar from './navbar';
import Cbackground from './background';
import CPage from './Page';
import reportWebVitals from './reportWebVitals';
import CHome from './home';
import CProjects from './Projects'
//list of all page with thier path
var Pages={
  '':CHome,
  'Projects':CProjects
}

// get to where the path redirect
var PagePath=window.location.pathname.split("/")[1]
// The Variable How Will Hold The Page
var Page = React.Component
// map and if there is no element then set to homepage
Page=Pages[PagePath]??CHome
ReactDOM.render(
  <React.StrictMode> 
    <CNavbar/>
    <Cbackground />   
    <CPage Page={Page}/>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
