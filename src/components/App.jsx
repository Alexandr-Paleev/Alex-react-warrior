import React from 'react';
import { moviesData } from '../moviesData';
import MovieItem from './MovieItem';

// UI = fn(state, props)


class App extends React.Component {
    constructor() {
        super();
        
        this.state = {
            movies: moviesData,
            moviesWillWatch: []
        };

        // this.removeMovie = this.removeMovie.bind(this);
    }

    removeMovie = movie => {
        const updateMovie = this.state.movies.filter(function(item) {
            return item.id !== movie.id;
        });
        console.log(updateMovie);
        this.setState({
            movies: updateMovie
        });
    }

    addMovieToWillWatch = movie => {
        console.log(movie);
        // const updateMoviesWillWatch = this.state.moviesWillWatch.slice();
        // updateMoviesWillWatch.push(movie);
        
        const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
        this.setState({
            moviesWillWatch: updateMoviesWillWatch
        })
    }

    render() {
        // console.log(this)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            {this.state.movies.map((movie) => {
                                return (
                                    <div className="col-6 mb-4" key={movie.id}>
                                        <MovieItem 
                                            movie={movie} 
                                            removeMovie={this.removeMovie} 
                                            addMovieToWillWatch={this.addMovieToWillWatch} 
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-3">
                        <p>Will Watch: {this.state.moviesWillWatch.length}</p>
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