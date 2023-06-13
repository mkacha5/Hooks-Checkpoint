import "./App.css";
import Navbar from "./component/Navbar";
import Cardlist from "./component/Cardlist";
import { movies } from "./data";
import { useState } from "react";
import AddCard from "./component/AddCard";
import { Route, Routes } from "react-router-dom";
import Details from "./component/Details";

function App() {
  const [searchMovies, setSearchMovies] = useState("");
  const [allCards, setAllCardss] = useState(movies);
  const [rating, setRating] = useState(0);
  const getCards = (title, desc, posterUrl, rating, trailerSrc) => {
    console.log("ccccccccc");
    // setAllTasks([...allTasks, {id:Date.now(),description,user,isDone:false}]);
    setAllCardss((prev) => [
      ...prev,
      { id: Date.now(), title, desc, posterUrl, rating, trailerSrc },
    ]);
  };

  const funsun = (valu) => {
    setSearchMovies(valu);
  };

  return (
    <div className="App">
      <Navbar funsun={funsun} rating={rating} setRating={setRating} />
      <Routes>
        <Route
          path="/movies"
          element={
            <>
              <AddCard getCards={getCards} />
              <div className="container">
                <div className="row">
                  <h1>listes :</h1>
                  <Cardlist
                    movies={allCards}
                    valsearch={searchMovies}
                    rating={rating}
                  />
                </div>
              </div>
            </>
          }
        />

        {<Route path="/movies/:id" element={<Details cards={allCards} />} />}
      </Routes>
    </div>
  );
}

export default App;
