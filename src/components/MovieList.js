import { useState } from "react";
import { movieData } from "../data";
import MovieCard from "./MovieCard";
import Toolkit from "./Toolkit.js";

const MovieList = () => {
  const [movies, setMovies] = useState(movieData);

  const handleAdd = (item) => {
    setMovies([...movies, item]);
  };

  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);

  console.log(rating);
  return (
    <>
      <div className="text-center flexCard" style={{ width: "70%" }}>
        {movies
          .filter(
            (el) =>
              el.title
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase()) && el.rating >= rating
          )
          .map((movie, index) => {
            return <MovieCard key={index} movie={movie} className="cardItem" />;
          })}
      </div>
      <Toolkit
        handleAdd={handleAdd}
        setSearch={setSearch}
        setRating={setRating}
      />
    </>
  );
};

export default MovieList;
