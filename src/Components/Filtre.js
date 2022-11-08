import { Rating } from '@mui/material'
import React from 'react'
import { Form } from 'react-bootstrap'

const Filtre = ({setSearch, setRate}) => {
  return (
    <div className='ll' >
        <Form.Control
        onChange={(e)=> setSearch(e.target.value)}
              style={{width:'300px', position:'sticky'}}
              type="text"
              placeholder="type the title of the movie"
            />
        <Rating 
        onChange={(e,newValue)=> setRate(newValue)}
        max={10} name="simple-controlled" defaultValue={0} />

    </div>
  )
}

export default Filtre