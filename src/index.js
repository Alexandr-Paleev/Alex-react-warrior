import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// const movie = {
//   title: "Avengers: Infinity War",
//   voteAverage: 8.5,
//   image: "https://lh3.googleusercontent.com/proxy/MfIZYYmNT63_vbWEXehY0DsVcnh1xdibZ0iV0yrrY_BvzkV_WnZwjNfg6DU8uCOL4PgCI22LwnfRNDurf7OuJa9ksooJQudg9iP6tR7JVTVV1nwgEw",
//   overview: "lalala lalala lalala"
// }

// function Image(props) {
//   return (
//     <img style={{width: "100%"}} src={props.src} alt={props.alt} />
//   )
// }
  
// // MovieItem = new React.Component()
// class MovieItem extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       show: false,
//       like: false
//     };
//   }

//   toggleOverview = () => {
//     this.setState({
//       show: !this.state.show
//     });
//   }

//   handleLike = () => {
//     this.setState({
//       like: !this.state.like
//     });
//   }

//   render() {
//     const {data: {title, voteAverage, image, overview}} = this.props;
//     console.log(this.state.show, this.state.like)
//     return (
//       <div style={{width: "300px"}}>
//         <Image src={image} alt={title} />
//         <p>{title}</p>
//         <p>{voteAverage.toFixed(1)}</p>
//         <div style={{display: "flex", justifyContent: "space-between"}} >
//           <button type="button" onClick={this.toggleOverview}>
//             {this.state.show ? "hide": "show"}
//           </button>
//           <button 
//             type="button" 
//             onClick={this.handleLike}
//             className={this.state.like ? "btn--like" : ""}
//           >
//             Like
//           </button>
//         </div>
//         {this.state.show ? <p>{overview}</p>: null}
//       </div>
//     )
//   }
// }

// function App () {
//   return (
//     <div>
//       <h1>Hello man!!!</h1>

//       <MovieItem data={movie} />
//     </div>
//   )
// }

ReactDOM.render(<App />, document.getElementById('root'));
