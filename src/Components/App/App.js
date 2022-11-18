import './App.css';
import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import Movie from '../Movie/Movie';
import Customlist from '../Customlist/Customlist';
import MovieApi from '../../util/Apiconnect';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      actorList: [],
      movieIsLoad: false,
      movieTitle: "",
      actors: []
    }
    this.onActorAdd = this.onActorAdd.bind(this);
    this.onMovieAdd = this.onMovieAdd.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.reset = this.reset.bind(this);
    this.onMovieRemove = this.onMovieRemove.bind(this);
    this.onActorRemove = this.onActorRemove.bind(this);
  }

  async onSearch(movie) {
    await MovieApi.searchMovie(movie);
    let nTitle = MovieApi.respuestaJSON['Title'];
    let nActors = MovieApi.respuestaJSON['Actors'];
    if (!nTitle || !nActors) {
      this.setState({
        movieTitle: "Pelicula no encontrada",
        actors: [],
        movieIsLoad: true
      })
      return;
    }
    let actorsArray = nActors.split(", ");
    this.setState({
      movieTitle: nTitle,
      actors: actorsArray,
      movieIsLoad: true
    })
  }
  onActorAdd(actor) {
    let actorRepeated = this.state.actorList.find(item => actor === item);
    if (actorRepeated) {
      return;
    }
    let temp = this.state.actorList;
    temp.push(actor);
    this.setState({
      actorList: temp
    })
  }
  onMovieAdd(movie) {
    let movieRepeated = this.state.movieList.find(item => movie === item);
    if (movieRepeated) {
      return;
    }
    let temp = this.state.movieList;
    temp.push(movie);
    this.setState({
      movieList: temp
    })
  }

  onMovieRemove(index){
    let nMovies = [];
    this.state.movieList.forEach((item, i) => {
      if(index !== i){
        nMovies.push(item);
      }
    })
    this.setState({
      movieList : nMovies
    })
  }
  onActorRemove(index){
    let nActors = [];
    this.state.actorList.forEach((item, i) => {
      if(index !== i){
        nActors.push(item);
      }
    })
    this.setState( {
      actorList : nActors
    })
  }
  reset() {
    this.setState({
      movieList: [],
      actorList: [],
      movieIsLoad: false,
      movieTitle: "",
      actors: []
    })
  }
  render() {
    return (
      <main>
        <header>
          <h2 id='title-logo' >Movie<span className='highlight'>App</span></h2>
          <img src={require('../Images/movieapplogo.png')} alt='movieapp-logo' className='logo' />
        </header>
        <div id='app-body' className='app-body'>
          <section className='search-area'>
            <Searchbar onSearch={this.onSearch} />
            <button className='general-button reset' onClick={this.reset}>Reset</button>
          </section>
          <section className='card-container'>
            <Movie onActoradd={this.onActoradd} onMovieAdd={this.onMovieAdd} onActorAdd={this.onActorAdd} movieIsLoad={this.state.movieIsLoad}
              movieTitle={this.state.movieTitle} actors={this.state.actors} />
            <Customlist id="movies" listContent={this.state.movieList} onMovieRemove={this.onMovieRemove} >Favorite Movies</Customlist>
            <Customlist id="actors" listContent={this.state.actorList} onActorRemove={this.onActorRemove}>Favorite Actors</Customlist>
          </section>
        </div>
      </main>
    );
  }
}

export default App;
