import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss';
import FilmList from './components/FilmList';
import HeaderFilmList from './components/HeaderFilmList';
import FilmSearchBar from './components/FilmSearchBar';

// Mye her er en basert fra en YouTube video som gir en god forklaring på hvordan man arbeider med API'er i sammenheng med React.//
//Referanse på video https://www.youtube.com/watch?v=jc9_Bqzy2YQ//
const Filmsearch = () => {
  const [movies, setMovies] = useState([]);
// Denne funker sånn at når søkefeltes verdi er null så vil det fremvises James Bond filmer.//
  const [searchValue, setSearchValue] = useState('James Bond');

  const getMovieRequest = async (searchValue) => {
//"&type-movie" gjør sånn at det kun skal komme filmer opp og ikke ting som serier & spill etc.//
    const url = `https://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=68c7160d`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search) {
      setMovies(responseJson.Search);
    }
  }

//Her tar den to arguments som vil bli executed basert på situasjonen, hvis 3 bokstaver eller mer tastes inn vil den gi film resu//
  useEffect(() => {
    if (searchValue.length >= 3) {
    getMovieRequest(searchValue);
    }
  }, [searchValue]); 

  return (
    <div className='container-fluid movie-search'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <HeaderFilmList header="Moooovie!"/>
        <FilmSearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
      <FilmList movies={movies}/>
      </div>
    </div>
  );
}

export default Filmsearch;
