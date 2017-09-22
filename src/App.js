//Use the following example with create react CLI
// install it at the following address:
// https://github.com/facebookincubator/create-react-app
// use sublime text to edit
// Getting React Sublime text article to read
//http://gunnariauvinen.com/getting-es6-syntax-highlighting-in-sublime-text/

// Interesting article on state change
// http://lucybain.com/blog/2017/react-js-when-to-rerender/

// for information about lifecycle hooks look the following
// https://facebook.github.io/react/docs/react-component.html#shouldcomponentupdate

// In React, state and props serve different goals: state allows a component to maintain 
// some changing values, while props are the mecanism to propagate those values to children.

// DOM Elemnts in react Virtual DOM
// https://facebook.github.io/react/docs/dom-elements.html
//In React, all DOM properties and attributes (including event handlers) should be camelCased. 

//https://facebook.github.io/flux/

// Important example with slingshot
//https://scotch.io/tutorials/build-a-bookshop-with-react-redux-i-react-redux-flow

// Video on redux
//https://egghead.io/courses/getting-started-with-redux
//https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree

// Good example with redux
// https://github.com/tstringer/create-react-app-with-redux

import React, { Component } from 'react';
import './App.css';

import DangerButton from './dangerbutton';

class App extends Component {

constructor(props) {
    super(props);
    this.state = {
      data: [],
      message:'Hello world'
    };
    this.diego = "Diego Burlando";
    this.flowers = [];

}

componentDidMount() {
  
// this is the right place to fetch data asyncronously.  
// for a post example look at the following example
// https://facebook.github.io/react-native/docs/network.html


// uncomment the following and comment the fetch from json file
//fetch("https://jwt-diegomary.rhcloud.com/api/flowers",
  //{method: 'GET',headers: {'Accept': 'application/json','Content-Type': 'application/json',}})


fetch("./flowers.json")
      .then(response => response.json())
      .then(json => {
      this.diego="diego";       
        this.setState({
          data: json
        });        
      });
}

componentWillMount() {}
componentWillUnmount() {}

shouldComponentUpdate(nextProps,nextState) {
  // here we can check to render only if certain stes or props have specific values
  //return false; // the component won't rerender
  return true; // The component will rerender
}


componentWillReceiveProps(nextProps) {
  alert();
    // The following will force a rerender of the component
    //this.forceUpdate();
}


// To avoid binding for each non-lifecycle method we can use the following notation in such case we do not need to bind to 
// this in the render return
// See https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
handleChange = (event) => {
  console.log(event.target);
  this.setState({message: event.target.value});
}

clickbutton =() => {  
     //console.log(this.state.message);
     console.log(this.refs.firstName.value);
}

getInitialState() {
    return {message: 'Hello!'};
  }

render() {

// for dom manipulation see:
//https://facebook.github.io/react/docs/dom-elements.html

let flowers = this.state.data.map(function(item) {
    return (<p key = {item.Id}><span>{item.Name}</span>&nbsp;
      <textarea defaultValue={item.Description} rows="1" cols="20"></textarea>
      <DangerButton name={item._id}/>
      </p>);
});

return (
  <div className="App">
  <DangerButton name="Diego and Mary" />
  <input id="firstName" ref="firstName" type="text" value={this.state.message} onChange={this.handleChange}/>
  <button onClick={this.clickbutton.bind(this)}>Clickme</button>
  <p>{this.diego}</p> 
    {flowers}
  </div>
);
}
}

App.defaultProps = { prop1:'property1', prop2:'property2' };
export default App;