import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  '../src/styles/App.css';
//components
import Homepage from './Homepage';
import SearchPage from './SearchPage';

// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route path="/" render={props=>{ return <Homepage {...props}/>}}/>
            {/* <Route path="/" Component={SearchPage}/> */}
            <Route path="/search" render={props=><SearchPage {...props}/>}/>
          </Switch>
      </Router>
    );
  }
}

export default App;
