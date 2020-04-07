import React from 'react';
import ReactDOM from 'react-dom';

const movie = {
  title: "Avengers: Infinity War",
  voteAverage: 8.5,
  image: "https://lh3.googleusercontent.com/proxy/MfIZYYmNT63_vbWEXehY0DsVcnh1xdibZ0iV0yrrY_BvzkV_WnZwjNfg6DU8uCOL4PgCI22LwnfRNDurf7OuJa9ksooJQudg9iP6tR7JVTVV1nwgEw",
  overview: "lalala lalala lalala"
}

function Image(props) {
  // console.log(props)
  return (
    <img src={props.src} alt={props.alt} />
  )
}

// function MovieItem(props) {
//   const {data: {title, voteAverage, image}} = props;
//   console.log(props)
//   return (
//     <div>
//       <Image src={image} alt={title} />
//       <p>{title}</p>
//       <p>{voteAverage.toFixed(1)}</p>
//     </div>
//   )
// }
  
// MovieItem = new React.Component()
class MovieItem extends React.Component {
  render() {
    const {data: {title, voteAverage, image}} = this.props;
    console.log(this)
    return (
      <div>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{voteAverage.toFixed(1)}</p>
    </div>
    )
  }
}

function App () {
  return (
    <div>
      <h1>Hello man!!!</h1>

      <MovieItem data={movie} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
);
