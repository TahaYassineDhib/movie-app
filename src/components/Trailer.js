import { Link, useParams } from "react-router-dom";
import { movieData } from "../data";

const Trailer = () => {
  const name = useParams().id;

  let currentMovie = movieData.filter((item) => item.title === name)[0];

  return (
    <>
      <h1>{currentMovie.title}</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/UaVTIH8mujA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <Link to="/"><button className="btn btn-primary">Browse more movies</button></Link>
    </>
  );
};

export default Trailer;
