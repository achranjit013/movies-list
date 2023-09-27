import React, { useEffect, useState } from "react";
import { CustomCard } from "./CustomCard";

export const Display = ({ movieList, updateToMovieList }) => {
  const [newMovieList, setNewMovieList] = useState([]);

  useEffect(() => {
    setNewMovieList(movieList);
  }, [movieList]);

  const handleOnClick = (mood) => {
    let newMLArray = [];
    if (mood !== "all") {
      movieList.forEach((elm) => {
        if (elm.mood === mood) {
          newMLArray = [...newMLArray, elm];
        }
      });
    } else {
      newMLArray = movieList;
    }
    setNewMovieList(newMLArray);
  };

  const func = ({ imdbID }) => {
    const fileteredMovieList = movieList.filter(
      (item) => item.imdbID !== imdbID
    );
    updateToMovieList(fileteredMovieList);
    setNewMovieList(fileteredMovieList);
  };

  return (
    <div className="bg-black p-5 rounded shadow-lg mt-5">
      <div className="row">
        <div className="col">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleOnClick("all")}
            >
              All
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => handleOnClick("happy")}
            >
              Happy
            </button>
            <button
              type="button"
              className="btn btn-info"
              onClick={() => handleOnClick("action")}
            >
              Action
            </button>
          </div>
          <div className="mt-3">{newMovieList.length} movie (s) found</div>
          <hr />
        </div>
      </div>

      <div className="row">
        <div className="col d-flex flex-wrap justify-content-between">
          {newMovieList.map((item, i) => (
            <CustomCard key={i} movie={item} func={func} />
          ))}
        </div>
      </div>
    </div>
  );
};
