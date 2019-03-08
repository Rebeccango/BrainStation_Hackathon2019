import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-dom';
import  '../src/styles/App.css';
//components
import Homepage from './Homepage';

// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Homepage/>
      </div>
    );
  }
}

export default App;
