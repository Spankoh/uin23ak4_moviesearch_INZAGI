import React from "react";

// Dette er for å skape søkefelt og funksjonaliteten til søkefeltet. //
const FilmSearchBar = (props) => {
    return(
        <div className="col col-small">
            <input 
            className="form-control"
            value={props.value} 
            onChange={(event)=> props.setSearchValue(event.target.value)}
            placeholder="Search for a movie ..."
            ></input>
        </div>
    )
}

export default FilmSearchBar;