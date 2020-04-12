import React, { Component } from 'react'

class MovieListWillWatch extends Component {
    render() {
        const { list } = this.props;

        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                    <div className="d-flex justify-content-between">
                        <h6>{list.title}</h6>
                        <p>{list.vote_average}</p>
                    </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MovieListWillWatch;
