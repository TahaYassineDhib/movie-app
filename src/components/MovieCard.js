import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <>
      <Link to={movie.title} style={{textDecoration: "none"}}>
        <Card style={{ width: "10rem", margin: "10px" }}>
          <Card.Img variant="top" src={movie.poster} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{movie.director}</ListGroup.Item>
            <ListGroup.Item>{movie.year}</ListGroup.Item>
            <ListGroup.Item>{movie.genre}</ListGroup.Item>
            <ListGroup.Item>{movie.rating}</ListGroup.Item>
          </ListGroup>
        </Card>
      </Link>
    </>
  );
};

export default MovieCard;
