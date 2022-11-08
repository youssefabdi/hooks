import { Rating } from '@mui/material'
import React from 'react'
import { Card, Col} from 'react-bootstrap'

const MovieList = ({dataMovie}) => {
  return (
    <div style={{display:'grid', gridTemplateColumns: 'auto auto auto',gap: '10px',justifyContent:'space-evenly'}}>
       
      {dataMovie.map((movie,i) => (
        <Col key={i}>
          <Card style={{width:'18rem'}}>
            <Card.Img variant="top" src={movie.posterUrl} style={{height:'20rem',  borderradius: '50%',border: '5px solid #26008d'}} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
                {movie.description}
              </Card.Text>
              <Rating max={10} name="read-only" value={movie.rating} readOnly />
            </Card.Body>
          </Card>
        </Col>
      ))}
    
    </div>
  )
}

export default MovieList