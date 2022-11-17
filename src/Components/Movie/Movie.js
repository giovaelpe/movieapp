import React from "react";
import './Movie.css';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.handleActorAdd = this.handleActorAdd.bind(this);
        this.handleMovieAdd = this.handleMovieAdd.bind(this);
    }

    handleMovieAdd(){
        let movieName = this.props.movieTitle;
        this.props.onMovieAdd(movieName);
    }
    handleActorAdd(e){
        let actorName = e.target.id;
        this.props.onActorAdd(actorName);
    }
    render() {
        let body;
        if (!this.props.movieIsLoad) {
            body = (
                <div className="movie-result cards">
                    <h2>Your Movie will show up here</h2>
                </div>
            );
        } else if (this.props.movieIsLoad && !this.props.movieTitle) {
            body = (
                <div className="movie-result cards">
                <h2>Movie not found</h2>
                </div>
            );
        } else {
            body = (
                <div className="movie-result cards">
                    <h2>{this.props.movieTitle}<button className="general-button plus-button" onClick={this.handleMovieAdd}>+</button></h2>
                    <h3>Main actors</h3>
                    <ul>
                        {
                            this.props.actors.map((item, index) => {
                                return <li key={index.toString()}>{item}<button onClick={this.handleActorAdd} className="general-button plus-button" id={item}>+</button></li>
                            })
                        }
                    </ul>
                </div>
            );
        }
        return (
            <div>
                {body}
            </div>
        );
    }
}

export default Movie