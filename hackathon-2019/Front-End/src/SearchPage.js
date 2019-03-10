import React from 'react';
//Component Dependencies
import uuid from 'uuid';
import Header from './components/Header';
import MovieTitleCard from './components/MovieTitleCard';
import RecommendationCard from './components/RecomendationCard';
//Data
import Results from './data/Results';

export default class SearchPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            results: Results,
            actor: 'Tom Hanks'
        }
    }

    componentDidMount(){
        this.setState({
            actor: this.props.match.params.actor
        })
    }

    render(){
        const selected = this.state.actor;
        const results = this.state.results
        const actorIndex = results.findIndex(actor=>actor.name === selected)

        return(
            <div className="Searchpage" id="#searchpage">
                <div className="searchpage__">
                    <section className="directresults">
                        <h2 className="indent"> Movies Starring {this.state.actor}</h2>
                        <div className="actorSelectionResults">
                        {  results[actorIndex].top4.map( movie =>(
                            <MovieTitleCard  alt= {movie.title}
                                                src= {movie.URL}
                                                title= {movie.title} />)
                        )}
                </div> 
                    </section>
                    <section className="similarresults">
                        <h2 className="indent"> Love {this.state.actor}? We Suggest...</h2>
                        <div className="actorSelectionRecommendations">
                        {  results[actorIndex].similar.map( movie =>(
                            <RecommendationCard alt= {movie.title}
                                                star={movie.star}
                                                src= {movie.URL}
                                                title= {movie.title} />)
                        )}
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}