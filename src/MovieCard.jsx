import React from "react";

const MovieCard = (props) => {
    return(
        <div className='movie'>
          <div>
            <p>{props.movie.Year}</p>
          </div>
          <div>
            <img src={props.movie.Poster} alt={props.movie.Title}/>
          </div>
          <div>
            <span>{props.movie.Type}</span>
            <h3>{props.movie.Title}</h3>
          </div>
        </div>
    );
}

export default MovieCard;