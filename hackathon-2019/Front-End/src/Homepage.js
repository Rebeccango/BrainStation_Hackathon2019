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
        return(
            <div className="HomePage">
                <h1 className="HomePage__header">Golden Years</h1>
                <h3>Pick Your Favourit Actor/Actress</h3>
                <section ClassName="ActorsList">
                    <h6 className="subheader">Select your Favourite Character</h6>
                    <div ClassName="ActorsList__div--container">
                        <ActorCard/>
                        <ActorCard/>
                        <ActorCard/>
                        <ActorCard/>
                        <ActorCard/>
                        {/* {ActorCardListJSX} */}
                    </div>
                    <button className="submitbtn">Submit</button>
                </section>
            </div>
        )
    }
}