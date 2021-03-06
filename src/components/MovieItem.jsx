import React from 'react';

class MovieItem extends React.Component {
    constructor() {
        super();

        this.state = {
            willWatch: false
        }
    }

    render() {
        const {movie, removeMovie, addMovieToWillWatch, removeMovieFromWillWatch} = this.props;
        const {willWatch} = this.state;

        return (
            <div className="card">
            <img
                className="card-img-top"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
                movie.poster_path}`}
                alt="no for this movie"
            />
            <div className="card-body">
                <h6 className="card-title">{movie.title}</h6>
                <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0">Rating: {movie.vote_average}</p>
                    <button
                        type="button"
                        className={willWatch ? "btn btn-success" : "btn btn-secondary"}
                        onClick={() => {
                            this.setState({
                                willWatch: !willWatch
                            });
                            willWatch ? removeMovieFromWillWatch(movie) : addMovieToWillWatch(movie);
                        }}
                    >
                        Will Watch
                    </button>
                
                </div>
                <button onClick={removeMovie.bind(null, movie)}>
                    Delete movie
                </button>
            </div>
            </div>
        )
    }
}

export default MovieItem;