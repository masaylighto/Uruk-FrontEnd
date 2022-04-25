import React from 'react';
import '../Assets/css/tailwind.css'
class CTransparentButton extends React.Component{
    
    render()
    {
      return (<button  onClick={this.props.onClick} className="p-4 h-14 flex justify-center items-center text-white">{this.props.Text}</button>)
    }
}
export {CTransparentButton}