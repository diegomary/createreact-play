import React, { Component } from 'react';
import './App.css';

class DangerButton extends Component {
  render() {

  const divDangerStyle = {	  
	  color: 'blue',
	  backgroundColor:'yellow'
	};

    return (    	
    		<button style={divDangerStyle} className="danger-button">{this.props.name}</button>		
    );
 
  }
}

export default DangerButton;