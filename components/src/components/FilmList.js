import React from "react";

const FilmList = (props) => {
    const movies = props.movies;
    const fallbackImage = "https://cms-cdn.placeholder.co/Home_page1_76f0b1d7ab.png?width=300&height=400";
  
    return (
      <div className='row'>
        {movies.map((movie, index) => (
          <div className='col titles' key={index}>
            <img
              src={movie.Poster === "N/A" ? fallbackImage : movie.Poster}
              alt={movie.Title}
            />
            <div className='movie-details'>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <p>{movie.Genre}</p>
              <p>Director: {movie.Director}</p>
              <p>Actors: {movie.Actors}</p>
              <p>Prizes & Awards: {movie.Awards}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  

export default FilmList;