import React from "react";
import PropTypes from "prop-types";

function Movie({ id, title, summary, poster, year, genres }) {
  return (
    <div className="movie">
      <img
        className="movie__image"
        src={poster}
        title={title}
        alt={title}
      ></img>
      <div className="movie__inf">
        <h1>{title}</h1>
        <h4>{year}</h4>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="movie__genre">
              {genre}
            </li>
          ))}
        </ul>
        <h5>{summary.slice(0, 260)}...</h5>
      </div>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
