import React, { Component } from 'react';
import './App.css';

class DangerButton extends Component {
  render() {

  const divDangerStyle = {
	  width:'20%',
	  color: 'blue',
	  backgroundColor:'green'
	};	

    return (
    	<div style={divDangerStyle}>
    		<button className="danger-button">Press this button</button>
		</div>
    );
 
  }
}

export default DangerButton;