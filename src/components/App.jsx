import React from 'react';
import { moviesData } from '../moviesData';

// UI = fn(state)

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: moviesData
        }
    }
    render() {
        console.log(this)
        return <div>
            {this.state.movies.map((elem) => {
                return <p>{elem.title}</p>
            })}
        </div>;
    }
}

// function App() {
//     return <div>{moviesData[0].title}</div>
// }

export default App;