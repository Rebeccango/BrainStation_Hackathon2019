import React from 'react';
// Component Dependencies 
import ActorCard from './components/ActorCard';
import Header from './components/Header';
//Sample Data
import recommendedActors from './data/RecommendedActors';


export default class Homepage extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            recommendedActors: recommendedActors,
        }
        this.actorSelectForm = React.createRef();
    }

    submitForm = (e)=>{
        console.log(this.actorSelectForm);
        e.preventDefault();
        let path = "/results"
        this.props.history.push(path);
      }
    render(){
        const recommendedActors = this.state.recommendedActors;

        console.log(this.props.recommendedActors);
        return(
            <>
            <Header/>
            <div className="HomePage">
                <section className="ActorsList">
                    <h2 className="subheader">Select your Favourite Actor</h2>
                    <div className="ActorsList__div">
                        <form className="ActorsSelection__form" ref={this.actorSelectForm}>
                        {recommendedActors.map( actor => (
                            <ActorCard name={actor.name} id={actor.id} src={actor.URL }/> ) 
                            )}
                        <input className="homepage__submitbtn"
                                type='submit'
                                onClick={this.submitForm}/>
                        </form>
                    </div>
                </section>
            </div>
            </>
        )
    }
}