import React from "react";

// Her lager jeg en funksjon som skal printe plakatene til filmene og detaljene til filmene inn på nettsiden. //
const FilmList = (props) => {
    const movies = props.movies;
    /* Her gjør jeg sånn at hvis filmer uten plakat vises opp så skal den bli replaced med ett placeholder link
    dere har latt meg benytte meg av som jeg fant på oppgaveteksten. */
    const fallbackImage = "https://cms-cdn.placeholder.co/Home_page1_76f0b1d7ab.png?width=300&height=400";
    
  
    /* Her hentes og printes ut detaljer via API'en ved hjelp av arrays, det er en liste med
    forskjellige ting som "Year", "Title" som er i lista jeg printer ut. */
    return (
      <div className='row'>
        {movies.map((movie, index) => (
          <div className='col titles' key={index}>
            <img className="movie-posters"
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