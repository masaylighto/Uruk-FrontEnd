import React from 'react';
import ReactDOM from 'react-dom';
import CNavbar from './navbar';
import Cbackground from './background';
import CPage from './Page';
import reportWebVitals from './reportWebVitals';
import CHome from './home';

ReactDOM.render(
  <React.StrictMode> 
     <CNavbar/>
    <Cbackground />
   
    <CPage Page={CHome}/>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
