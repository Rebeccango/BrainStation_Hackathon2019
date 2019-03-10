import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  '../src/styles/App.css';
//components
import Homepage from './Homepage';
import SearchPage from './SearchPage';
import VideoPlayer from './VideoPlayer';
import Header from './components/Header';

// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/results/:actor" component={SearchPage}/>
          <Route path="/watch" component={VideoPlayer}/>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
