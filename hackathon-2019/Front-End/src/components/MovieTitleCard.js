import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//components

// import './App.css';

export default class MovieTitleCard extends Component {


  render() {
    return (
      <Link to="/watch">
        <div className='movietitlecard'>
          <img className="movieposter" 
              alt="movie-poster"
              src={this.props.src}/>
          <div  className="movietitlecard__title--container">
            <h3 className="movietitlecard__title">{this.props.title}</h3>
          </div>  
        </div> 
      </Link>
      
    );
  }
}

