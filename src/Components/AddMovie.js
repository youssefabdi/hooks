import { Rating } from "@mui/material";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';


const AddMovie = ({AddingMovie}) => {
  const [newMovie,setNewMovie] = useState({
    id: uuidv4(),
    title:'',
    description:'',
    posterUrl:'',
    rating:0
  })
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const HandleChange =(e)=>{
   setNewMovie({...newMovie, [e.target.name]: e.target.value})
  }
  const Adding =()=>{
    AddingMovie(newMovie)
    handleClose()
  }
  
  return (
    <div >
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{display:'flex',gap:'15px', flexDirection:'column',}}>
            <Form.Control
              name='title'
              onChange={HandleChange}
              type="text"
              placeholder="type the title of the movie"
            />
            <Form.Control
              name='description'
              onChange={HandleChange}
              type="text"
              placeholder="type the Description of the movie"
            />
            <Form.Control
            name='posterUrl'
            onChange={HandleChange}
              type="text"
              placeholder="type the poster Url of the movie"
            />
            <Rating onChange={(e,newValue)=> setNewMovie({...newMovie,rating:newValue })} max={10} name="simple-controlled" defaultValue={0} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Adding}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
