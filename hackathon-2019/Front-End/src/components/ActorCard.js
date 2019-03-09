import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//components

// import './App.css';

export default class ActorCard extends Component {
  render() {
    console.log(this.props)
    return (
    <div className='actor'>
      <Link to={"/"+this.props.id}>
        <img src={this.props.src}
             alt={this.props.name}/>
        <h3>{this.props.name}</h3>
      </Link>
    </div>   
    );
  }
}

