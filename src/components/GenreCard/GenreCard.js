import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './GenreCard.css';

const GenreCard = (props) => {

  return (
    props.genre.map(element => (
      <div key={element} className="GenreCard">
        <h1 className="h1" key={element}>{element}</h1>
        {props.movie.map((el) => {
          if (el.genres.includes(element)) {
            return (
              <MovieCard
                key={el.title}
                title={el.title}
                image={el.poster}
                description={el.overview}
                cast={el.cast}
                director={el.director}
                movieLength={el.length}
                classification={el.classification}
                rating={el.imdb_rating}
                releaseDate={el.released_on}
              />
            )
          }
        })}
      </div>
    ))
  )

}


export default GenreCard;