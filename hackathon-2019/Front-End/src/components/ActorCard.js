import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//components

// import './App.css';

export default class ActorCard extends Component {


  render() {
    console.log(this.props)
    return (
    // <Link to ="/results" >
      <div className='actorCard'>
        <input type="checkbox" name={this.props.name}/>
          <label for="actorselect">
            <img className="actorImg"
                src={this.props.src}
                alt={this.props.name}/>
          </label>
          <h5 className='actorCard--name'>{this.props.name}</h5>
      </div> 
      
    );
  }
}

