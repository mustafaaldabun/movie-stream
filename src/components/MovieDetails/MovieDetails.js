import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import StarRatings from '../StarRatings/StarRatings';
import './MovieDetails.css';

const MovieDetails = (props) => {
  const location = useLocation();

  return (
    <div className="Page">
      <NavigationMenu />
      <Link to={"/"}>
        <h1 className="HomepageLink">Homepage</h1>
      </Link>
      <div className="MovieDetailsCard">
        <div className="MoveDetailsPage">
          <img src={location.state.image} alt="movie-poster" />
        </div>
        <div className="MovieDetails">
          <h1>{location.state.title} ({location.state.rating}/10)</h1>
          <StarRatings style={{ width: '300px' }} rating={location.state.rating} />
          <br />
          <div className="Subheading">
            <p className="Sub-headers">{location.state.releaseDate.substring(0, 4)}</p>|
            <p className="Sub-headers">{location.state.movieLength}</p>|
            <p className="Sub-headers">{location.state.director}</p>
          </div>
          <h6 className="Sub-headers">Cast: {location.state.cast.map((el) => <p key={el} className="Cast"> {el} | </p>)}</h6>
          <br />
          <p>{location.state.description}</p>
        </div>
      </div>
    </div >
  )
}

export default MovieDetails;
