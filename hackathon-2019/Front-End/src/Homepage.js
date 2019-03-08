import React from 'react';
import axios from 'axios';
//Dependencies 
import ActorCard from './components/ActorCard';
import Button from './components/Button';


export default class Homepage extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            recommendedActors: [],
            movieData: []
        }
    }
    componentDidMount(){
        console.log('call made ');
        const URL = `http://localhost:8080/home`;
        axios.get(URL)
        .then(response=>{
            this.setState({
                recommendedActors: response.data
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
                <h3>Pick Your Favourit Actor/Actress</h3>
                <div ClassName="ActorsList__div--containder">
                    <ActorCard/>
                </div>
                <Button/>
            </div>
        )
    }
}