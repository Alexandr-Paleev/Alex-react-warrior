import React, { Component } from 'react';
// import { moviesData } from '../moviesData';
import MovieItem from './MovieItem';
import MovieListWillWatch from './MovieListWillWatch';
import { API_URL, API_KEY_3 } from '../utils/api';
import MovieTabs from './MovieTabs';

// UI = fn(state, props)


class App extends Component {
    constructor() {
        super();
        
        this.state = {
            movies: [],
            moviesWillWatch: [],
            sort_by: "popularity.desc"
        };

        // this.removeMovie = this.removeMovie.bind(this);
    }

    componentDidMount() {
        this.getMovies();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.sort_by !== this.state.sort_by) {
            this.getMovies();
        }
    }

    removeMovie = movie => {
        const updateMovie = this.state.movies.filter(function(item) {
            return item.id !== movie.id;
        });
        this.setState({
            movies: updateMovie
        });
    }

    addMovieToWillWatch = movie => {
        // const updateMoviesWillWatch = this.state.moviesWillWatch.slice();
        // updateMoviesWillWatch.push(movie);
        
        const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
        this.setState({
            moviesWillWatch: updateMoviesWillWatch
        })
    }

    removeMovieFromWillWatch = movie => {
        const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(item) {
            return item.id !== movie.id;
        });
        this.setState({
            moviesWillWatch: updateMoviesWillWatch
        });
    }

    getMovies = () => {
        fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`)
          .then(response => {
              return response.json();
          }).then(data => {
              this.setState({
                  movies: data.results
              })
          })
    }

    updateSortBy = value => {
        this.setState({
            sort_by: value
        })
    }

    render() {
        // console.log(this)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <div className="row mb-4">
                            <div className="col-12">
                                <MovieTabs 
                                    sort_by={this.state.sort_by}
                                    updateSortBy={this.updateSortBy}
                                />
                            </div>
                        </div>
                        <div className="row">
                            {this.state.movies.map((movie) => {
                                return (
                                    <div className="col-6 mb-4" key={movie.id}>
                                        <MovieItem 
                                            movie={movie} 
                                            removeMovie={this.removeMovie} 
                                            addMovieToWillWatch={this.addMovieToWillWatch} 
                                            removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-3">
                        <h4>Will Watch: {this.state.moviesWillWatch.length} movies</h4>
                        {this.state.moviesWillWatch.map(movie => {
                            return (
                                <div key={movie.id}>
                                    <MovieListWillWatch 
                                        list={movie}                                         
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

// function App() {
//     return <div>{moviesData[0].title}</div>
// }

export default App;