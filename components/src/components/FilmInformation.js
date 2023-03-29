import React, { useState, useEffect } from "react";

const FilmInformation = ({ imdbID }) => {
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=68c7160d`);
      const data = await response.json();
      setMovieInfo(data);
    };

    fetchData();
  }, [imdbID]);

  return (
    <div>
      {movieInfo && (
        <div>
          <h2>{movieInfo.Title}</h2>
          <p>Directors: {movieInfo.Director}</p>
          <p>Actors: {movieInfo.Actors}</p>
          <p>Genre: {movieInfo.Genre}</p>
          <p>Awards: {movieInfo.Awards}</p>
        </div>
      )}
    </div>
  );
};

export default FilmInformation;

  