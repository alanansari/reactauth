import React, { useState } from 'react'
import { TextField } from '@mui/material';


const Email = () => {

  const [val,setVal] = useState('');

  function handleChange(e) {
    setVal(e.target.value.trim())
  }

  return (
      <TextField
       id="outlined-basic"
       variant="outlined"
       fullWidth
       label='Email *'
       value={val}
       onChange={(e)=>{handleChange(e)}}
       />
  )
}

export default Email
