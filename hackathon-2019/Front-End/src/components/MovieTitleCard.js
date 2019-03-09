import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//components

// import './App.css';

export default class MovieTitleCard extends Component {


  render() {
    console.log(this.props)
    return (
    // <Link to ="/results" >
      <div className='movietitlecard'>
        <img className="movieposter" 
             alt="movie-poster"
             src="https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Toy_Story.jpg/220px-Toy_Story.jpg"/>
        <div  className="movietitlecard__title--container">
          <h3 className="movietitlecard__title">{this.props.title}</h3>
        </div>
        
      </div> 
      
    );
  }
}

