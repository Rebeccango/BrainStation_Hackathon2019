import React from 'react';
import axios from 'axios';

export default class SearchPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movieData: {}
        }
    }

    componentDidMount(){
        console.log('call made ');
        const URL = `http://localhost:8080/search`;
        axios.get(URL)
        .then(response=>{
            this.setState({
                movieData: response.data
            })
            console.log( this.state.recommendedActors);
        })
        .catch(err =>{
            console.log(err);
        });
    }
    render(){
        return(
            <div className="Searchpage">
                <h1>Golden Years</h1>
                 <img src ="https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg"/>
                 <p>year:1994</p>
                 <p>Cast: Tom Hanks, Robin Wright, Gary Sinise </p>
                 <p>Description:Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright).</p>
            </div>
        )
    }
}