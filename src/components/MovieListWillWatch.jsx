import React from 'react'

const MovieListWillWatch = (props) => {
    const { movies } = props;

    return (
        <div>
            <h4>Will Watch: {movies.length} movies</h4>
                <ul className="list-group">
                    {movies.map(movie => {
                        return (
                            <div key={movie.id}>
                                <li className="list-group-item">
                                    <div className="d-flex justify-content-between">
                                        <h6>{movie.title}</h6>
                                        <p>{movie.vote_average.toFixed(1)}</p>
                                    </div>
                                </li>
                            </div>
                        )
                    })}
                </ul>
        </div>
    )
}

export default MovieListWillWatch;
