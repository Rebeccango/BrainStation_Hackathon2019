import React from 'react';
//Component Dependencies
import Header from './components/Header';
import MovieTitleCard from './components/MovieTitleCard';
import RecommendationCard from './components/RecomendationCard';

export default class SearchPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movieData: {},
            actor: 'Tom Hanks'
        }
    }

    render(){
        return(
            <div className="Searchpage" id="#searchpage">
                <Header/>
                    <div className="searchpage__">
                        <section className="directresults">
                            <h3> Movies Starring {this.state.actor}</h3>
                            <div className="actorSelectionResults">
                            <MovieTitleCard title="Movie title"/>
                            <MovieTitleCard title="Movie title"/>
                            <MovieTitleCard title="Movie title"/>
                            <MovieTitleCard title="Movie title"/>
                            </div>
                        </section>
                        <section className="similarresults">
                            <h3> Love {this.state.actor}? We Suggest...</h3>
                            <div className="actorSelectionResults">
                                <RecommendationCard title="Movie title"/>
                                <RecommendationCard title="Movie title"/>  
                                <RecommendationCard title="Movie title"/>                           
                                <RecommendationCard title="Movie title"/>                                                  
                            </div>
                        </section>
                    </div>
                 {/* <img src ="https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg"/>
                 <p>year:1994</p>
                 <p>Cast: Tom Hanks, Robin Wright, Gary Sinise </p>
                 <p>Description:Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright).</p> */}
            </div>
        )
    }
}