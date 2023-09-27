import React from "react";

export const CustomCard = ({ movie, func }) => {
  // console.log(movie);
  return (
    <div className="card my-2" style={{ width: "18rem" }}>
      <img src={movie?.Poster} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movie?.Title}</h5>
        <p className="card-text">{movie?.Plot?.slice(0, 150)}</p>

        {!movie.mood && (
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-warning"
              onClick={() => func({ mood: "happy", imdbID: movie?.imdbID })}
            >
              Happy
            </button>
            <button
              className="btn btn-info"
              onClick={() => func({ mood: "action", imdbID: movie?.imdbID })}
            >
              Action
            </button>
          </div>
        )}

        <div className="d-grid mt-2">
          <button
            className="btn btn-danger"
            onClick={() => func({ mood: "delete", imdbID: movie?.imdbID })}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
