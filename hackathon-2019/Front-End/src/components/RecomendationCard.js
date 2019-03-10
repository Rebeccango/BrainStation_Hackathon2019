import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//components

// import './App.css';

export default class MovieTitleCard extends Component {

  render() {
    return (
    // <Link to ="/results" >
      <div className='recommendationCard'>
        <img className="movieposter--recommendation" 
             alt={this.props.alt}
             src={this.props.src}/>
        <div  className="movietitlecard__title--container">
          <h3 className="movietitlecard__title">{this.props.star} - {this.props.title}</h3>
        </div>
        
      </div> 
      
    );
  }
}

