import React from 'react';
import axios from 'axios';
//Dependencies 
import ActorCard from './components/ActorCard';


export default class Homepage extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            recommendedActors: [],
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
        const recommendedActors = this.state.recommendedActors || [];

        console.log(this.props.recommendedActors);
        return(
            <div className="HomePage">
                <h1 className="HomePage__header">Golden Years</h1>
                <h3>Pick Your Favourite Actor/Actress</h3>
                <section className="ActorsList">
                    <h6 className="subheader">Select your Favourite Character</h6>
                    <div className="ActorsList__div--container">
                        {recommendedActors.map( actor => (
                            <ActorCard name={actor.name} id={actor.id} src={actor.URL }/> ) 
                        )}
                    </div>
                    <button className="submitbtn">Submit</button>
                </section>
            </div>
        )
    }
}