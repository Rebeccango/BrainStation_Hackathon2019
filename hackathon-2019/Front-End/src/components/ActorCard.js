import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//components

// import './App.css';

export default class ActorCard extends Component {

  refresh = ()=>{
    window.reload();
  }

  render() {
    const link = `/results/${this.props.name}`;
    console.log(this.props.name)
    return (
    <Link to = {link}
          onClick={this.refresh}>
      <div className='actorCard'>
            <img className="actorImg"
                src={this.props.src}
                alt={this.props.name}/>
          <h5 className='actorCard--name'>{this.props.name}</h5>
        </div> 
      </Link>
      
    );
  }
}

