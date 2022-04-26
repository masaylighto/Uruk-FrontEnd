import { CFail } from "../Pages/Fail";
import ReactDOM from 'react-dom';
/**
 * this method Render A fail page if the Response Isnt Ok
 * @param {*} Response 
 * @returns Response Data
 */
const QuitIfInVaild=(Response)=>{

    if(Response.State==="Done"){
        return Response.Data 
    }  
    QuitReact("Failed to retrieve Data from the server");   
  
}
const QuitReact=(Text)=>{
    ReactDOM.render
    (
      <CFail Text={Text}/>,
      document.getElementById('root')
    );
}
export {QuitIfInVaild,QuitReact}