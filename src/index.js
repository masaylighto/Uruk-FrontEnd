import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './sharedjs/translation.js'
import CFistPage from './pages/FirstPage';
console.log(process.env.REACT_APP_SERVER)
ReactDOM.render(
  <React.StrictMode> 
  
      <CFistPage></CFistPage>

    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
