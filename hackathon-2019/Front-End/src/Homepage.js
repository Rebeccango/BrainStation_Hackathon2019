import React from 'react';
// Component Dependencies 
import ActorCard from './components/ActorCard';
import Header from './components/Header';
//Sample Data
import recommendedActors from './data/RecommendedActors';
import { WSAEINVALIDPROVIDER } from 'constants';


export default class Homepage extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            recommendedActors: recommendedActors,
        }
        this.actorSelectForm = React.createRef();
    }

    render(){
        const recommendedActors = this.state.recommendedActors;

        console.log(this.props);
        return(
            <>
            <div className="HomePage">
                <section className="ActorsList">
                    <h2 className="subheader indent">Select your Favourite Actor</h2>
                    <div className="ActorsList__div">
                        {recommendedActors.map( actor => (
                            <ActorCard name={actor.name} 
                                        id={actor.id} 
                                        key={actor.id}
                                        src={actor.URL}/> ) 
                            )}
                    </div>
                </section>
            </div>
            </>
        )
    }
}