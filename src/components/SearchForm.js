import React, { useEffect, useRef, useState } from "react";
import { CustomCard } from "./CustomCard";
import { fetchMovie } from "../utils/axiosHelper";

export const SearchForm = ({ addToMovieList }) => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");
  const strRef = useRef("");
  // generate random char and show movie in the begining of the form loading
  // It will run after the initial render and after every re-render unless you specify dependencies.
  // It allows you to specify dependencies for the effect. If any of the dependencies change between renders, the effect function will run again. If you omit the dependency array, the effect runs after every render.
  useEffect(() => {
    const str = "QWERTYUIOPAASDFGHJKLZXCVBNNM1234567890";
    const randomIndex = Math.floor(Math.random() * str.length);
    const randomChar = str.charAt(randomIndex);

    // const fetchRandomMovie = async (randomChar) => {
    //   try {
    //     const data = await fetchMovie(randomChar);
    //     if (data.Response === "True") {
    //       setMovie(data);
    //       setError("");
    //     } else {
    //       // setError(data.Error);
    //       setError("Sorry, there is no movie in the list to display!!!");
    //       setMovie({});
    //     }
    //   } catch (error) {
    //     console.error("Error fetching movie: ", error);
    //     setError("An error occurred while fetching the movie!!!");
    //     setMovie({});
    //   }
    // };

    // fetchRandomMovie(randomChar);

    // IIFE method ->pronounced as iffy
    (async () => {
      try {
        const data = await fetchMovie(randomChar);
        if (data.Response === "True") {
          setMovie(data);
          setError("");
        } else {
          // setError(data.Error);
          setError("Sorry, there is no movie in the list to display!!!");
          setMovie({});
        }
      } catch (error) {
        console.error("Error fetching movie: ", error);
        setError("An error occurred while fetching the movie!!!");
        setMovie({});
      }
    })();
  }, []);

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

    strRef.current.value = "";
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
