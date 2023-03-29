import React from "react";

const HeaderFilmList = (props) => {
    return(
        <div className="col page-title">
            <h1>{props.header}</h1>
        </div>
    )
}

export default HeaderFilmList;