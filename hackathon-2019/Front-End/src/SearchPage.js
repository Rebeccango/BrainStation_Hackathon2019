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
            <div className="HomePage">
                <h1>Golden Years</h1>
            </div>
        )
    }
}