import { useState } from "react";
import "./App.css";
import { Display } from "./components/Display";
import { SearchForm } from "./components/SearchForm";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addToMovieList = (movie) => {
    setMovieList([...movieList, movie]);
  };

  console.log(movieList);
  return (
    <div className="wrapper bg-dark text-warning min-vh-100">
      <div className="container">
        {/* title */}
        <div className="row">
          <div className="col">
            <h1 className="mt-5 text-center">My Movies Collection</h1>
          </div>
        </div>

        <hr />

        {/* search bar / searchForm */}
        {/* -> form */}
        {/* -> card */}
        <SearchForm addToMovieList={addToMovieList} />

        {/* movies list / display */}
        {/* -> buttons */}
        {/* -> cards */}
        <Display movieList={movieList} />
      </div>
    </div>
  );
}

export default App;
