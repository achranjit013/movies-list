import React from "react";
import { CustomCard } from "./CustomCard";

export const Display = ({ movieList }) => {
  return (
    <div className="bg-black p-5 rounded shadow-lg mt-5">
      <div className="row">
        <div className="col">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary">
              All
            </button>
            <button type="button" className="btn btn-warning">
              Happy
            </button>
            <button type="button" className="btn btn-info">
              Action
            </button>
          </div>
          <div className="mt-3">{movieList.length} movie (s) found</div>
          <hr />
        </div>
      </div>

      <div className="row">
        <div className="col d-flex flex-wrap g-2 justify-content-between">
          {movieList.map((item, i) => (
            <CustomCard key={i} movie={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
