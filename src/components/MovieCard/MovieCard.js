import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = (props) => (
  <div className="MovieTile">
    <Link className="MovieTile"
      to={{
        pathname: `/movies/${props.title.replace(/ /g, '')}`,
        state: {
          title: props.title,
          description: props.description,
          image: props.image,
          cast: props.cast,
          movieLength: props.movieLength,
          director: props.director,
          classification: props.classification,
          rating: props.rating,
          releaseDate: props.releaseDate
        }
      }}>
      <h1 className="MovieTitle">{props.title}</h1>
      <br />
      <img className="Poster" src={props.image} alt="movie-poster" />
      <br />
      <br />
      <p className="Truncated">{props.description}</p>
      <br />
    </Link>
  </div>
);

export default MovieCard;