import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss';
import FilmList from './components/FilmList';
import HeaderFilmList from './components/HeaderFilmList';
import FilmSearchBar from './components/FilmSearchBar';

/* Mye i dette prosjektet er basert eller referert fra en YouTube video som gir en god forklaring på hvordan
man arbeider med API'er i sammenheng med React. */
// Referanse på video https://www.youtube.com/watch?v=jc9_Bqzy2YQ //
const Filmsearch = () => {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
// Funker sånn at når søkefeltet ikke har fått verdier enda vil nettsiden fremvise James Bond filmer. //
  const [searchValue, setSearchValue] = useState('James Bond');


  const getMovieRequest = async () => {
// "&type-movie" gjør sånn at det kun skal komme opp filmer og ikke ting som serier, spill etc. //
    const url = `https://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=68c7160d`;

      const response = await fetch(url).then(response => response.json());

      setMovies(response.Search);
      return response
  };
  

/* Her henter vi detaljer og informasjon fra filmens unike ID kalt imdbID vi vil da få printa ut informasjonen.
Her og litt andre ting har jeg fått tips & litt hjelp om hvordan dette funker fra medstudenter og tidligere studenter. */
  const getMovieDetails = async () => {
    const {Search: search} = await getMovieRequest();
    const movieDetailsPromise = search.map(async movie => {
      const url = `https://www.omdbapi.com/?i=${movie.imdbID}&type=movie&apikey=68c7160d`;
      const response = await fetch(url);
        return await response.json();

  });
    const movieDetails = await Promise.all(movieDetailsPromise);
    setMovieDetails(movieDetails)
  };


/* Her tar den to arguments som vil bli executed basert på situasjonen, hvis 3 bokstaver eller mer tastes inn vil
film resultater bli fremvist og hvis ikke den har de verdiene kommer det ikke noe opp. */
  useEffect(() => {
    if (searchValue.length >= 3) {
    getMovieDetails();
    console.log(movieDetails)
}}, [searchValue]);


// "Eiga" betyr film på japansk, bare så det er sagt. Så før jeg starta med CSS ville jeg ha et tema å følge. //
  return (
    <div className='container-fluid movie-search'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <HeaderFilmList header="E I G A - ムーヴィー"/>
        <FilmSearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
      <FilmList movies={movieDetails}/>
      </div>
    </div>
  );
}


export default Filmsearch;
