import React from 'react'

const MovieListWillWatch = (props) => {
    const { list } = props;

    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                <div className="d-flex justify-content-between">
                    <h6>{list.title}</h6>
                    <p>{list.vote_average.toFixed(1)}</p>
                </div>
                </li>
            </ul>
        </div>
    )
}

export default MovieListWillWatch;
