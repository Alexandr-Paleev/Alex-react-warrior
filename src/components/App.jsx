import React, { Component } from 'react';
// import { moviesData } from '../moviesData';
import MovieItem from './MovieItem';
import MovieListWillWatch from './MovieListWillWatch';
import { API_URL, API_KEY_3 } from '../utils/api';
import MovieTabs from './MovieTabs';
import Pagination from './Pagination';

// UI = fn(state, props)


class App extends Component {
    constructor() {
        super();
        
        this.state = {
            movies: [],
            moviesWillWatch: [],
            sort_by: "popularity.desc",
            currentPage: 1,
            total_pages: null
        };

        // this.removeMovie = this.removeMovie.bind(this);
    }

    componentDidMount() {
        this.getMovies();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.sort_by !== this.state.sort_by || prevState.currentPage !== this.state.currentPage) {
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
        
        let updateMoviesWillWatch = [...this.state.moviesWillWatch];
        updateMoviesWillWatch = updateMoviesWillWatch.filter(item => {
            return item.id !== movie.id;
        });
        updateMoviesWillWatch = [...updateMoviesWillWatch, movie];
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
        fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.currentPage}`)
          .then(response => {
              return response.json();
          }).then(data => {
              this.setState({
                  movies: data.results,
                  total_pages: data.total_pages
              })
          })
    }

    updateSortBy = value => {
        this.setState({
            sort_by: value
        })
    }

    updateCurrentPageNext = value => {
        this.setState({
            currentPage: ++value
        });
    }

    updateCurrentPagePrevious = (value) => {
        // value ? value : 1;
        if (value > 1) {
            value = value;
        } else if (value = 1) {
            value = 2;
        }
        this.setState({
            currentPage: --value
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <div className="row mb-4 mt-4">
                            <div className="col-12">
                                <MovieTabs 
                                    sort_by={this.state.sort_by}
                                    updateSortBy={this.updateSortBy}
                                />
                            </div>
                        </div>
                        <div className="row mb-4 mt-4">
                            <div className="col-12">
                                <Pagination 
                                    total={this.state.total_pages}
                                    currentPage={this.state.currentPage}
                                    updateCurrentPageNext={this.updateCurrentPageNext}
                                    updateCurrentPagePrevious={this.updateCurrentPagePrevious}
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
                        <div className="row mb-4 mt-4">
                            <div className="col-12" key={this.state.currentPage}>
                                <Pagination 
                                    total={this.state.total_pages}
                                    currentPage={this.state.currentPage}
                                    updateCurrentPageNext={this.updateCurrentPageNext}
                                    updateCurrentPagePrevious={this.updateCurrentPagePrevious}
                                    getNewPageMovies={this.getMovies}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-3 mt-4">
                        <MovieListWillWatch 
                            movies={this.state.moviesWillWatch} 
                        />
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