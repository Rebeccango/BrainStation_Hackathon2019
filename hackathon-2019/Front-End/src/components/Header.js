import React from 'react';
import { Link } from 'react-router-dom';
//assets
import reel from '../assets/film-reel.png';

export default class Header extends React.Component{
    render(){
        return(
            <Link to= "/">
                <header>
                    <div className="header__container">
                        <h1 className="main__header">Golden Years</h1>
                        <h5 className="main__subheader">The Best movies from the 80's and 90's</h5>
                    </div>
                    <img src={reel}
                        alt="film-reel" 
                        className="goldenYears__reel"/>
                </header>
            </Link>
        )
    }
}