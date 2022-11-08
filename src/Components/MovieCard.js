import { Rating } from '@mui/material'
import React from 'react'
import { Card, Col } from 'react-bootstrap'

const MovieCard = ({data}) => {
  return (
    <div className='mm'>
        <Col >
          <Card style={{width:'18rem'}}>
            <Card.Img variant="top" src={data.posterUrl} style={{width:'18rem',height:'20rem'}} />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>
                {data.description}
              </Card.Text>
              <Rating max={10} name="read-only" value={data.rating} readOnly />
            </Card.Body>
          </Card>
        </Col>
    </div>
  )
}

export default MovieCard