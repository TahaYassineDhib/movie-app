import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const Toolkit = ({handleAdd , setSearch , setRating}) => {
  
    const [show, setShow] = useState(false);
    const [newMovie, setNewMovie] = useState({
      title: "" ,
      director: "" , 
      year: 0 ,
      poster: "" , 
      genre : "" , 
      rating : 0 , 

    });
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <>
      <div id="toolkit">
        <input type="text" placeholder="Search movie by name" id="movieName" onChange={(e) => setSearch(e.target.value)}/>
        
        <Button variant="primary" onClick={handleShow}>
            Add a movie
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>movie name</Form.Label>
                <Form.Control
                  type="text"
                 onChange={(e) => setNewMovie({...newMovie, title:e.target.value})}
                />
                <Form.Label>director</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setNewMovie({...newMovie, director:e.target.value})}
                />
                <Form.Label>Poster Link</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setNewMovie({...newMovie, poster:e.target.value})}
                />
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => setNewMovie({...newMovie, year:e.target.value})}
                />
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setNewMovie({...newMovie, genre:e.target.value})}
                />
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => setNewMovie({...newMovie, rating:e.target.value})}
                  
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() =>{handleClose() ;handleAdd(newMovie) } }>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
        <input type="number" placeholder='enter a rating' style={{marginTop: "10px"}} onChange={(e) => {setRating(e.target.value)}} />
      </div>
    </>
  );
};

export default Toolkit;
