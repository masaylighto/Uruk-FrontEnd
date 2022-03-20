import React from "react";


class CPage extends React.Component
{   
    _Page = React.Component 
    constructor(props)
    {   super(props)
        this._Page=props.Page
    }    
    render()
    {
       return <this._Page />
    }
}
export default CPage