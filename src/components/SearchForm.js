import React, { useRef, useState } from "react";
import { CustomCard } from "./CustomCard";
import { fetchMovie } from "../utils/axiosHelper";

export const SearchForm = ({ addToMovieList }) => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");
  const strRef = useRef("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setMovie({});
    setError("");

    const str = strRef.current.value;

    const data = await fetchMovie(str);

    if (data.Response === "True") {
      setMovie(data);
    } else {
      setError(data.Error);
    }
  };

  const func = ({ mood }) => {
    if (mood !== "delete") {
      addToMovieList({ ...movie, mood });
    }

    setMovie({});
  };

  return (
    <div className="bg-black p-5 rounded shadow-lg">
      <div className="row g-2">
        <div className="col-md">
          <form onSubmit={handleOnSubmit}>
            <div className="mb-2">
              <input
                ref={strRef}
                type="text"
                className="form-control"
                id="inputtext"
                placeholder="Search Movies..."
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-warning">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="col-md d-flex justify-content-center">
          {error && <div className="alert alert-danger">{error}</div>}
          {movie?.imdbID && <CustomCard movie={movie} func={func} />}
        </div>
      </div>
    </div>
  );
};
