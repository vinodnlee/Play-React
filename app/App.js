import React from 'react';
import ReactDOM from 'react-dom';
//import React, { Component } from 'react';
//import {render} from 'react-dom';

class App extends React.Component {
  render(){
  	let str = " Hi To my sweety"
    return (
      <h1>{str}</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
