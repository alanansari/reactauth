import React, { useState } from 'react'
import { TextField, Tooltip } from '@mui/material';


const Email = () => {

  const [val,setVal] = useState('');
  const [isValid,setValid] = useState(true);

  function handleChange(e) {
    let value = e.target.value;
    setVal(value.trim())
    if(value!=='')
    setValid(value.match(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    ));
  }

  let content;

  (isValid)?
    content = <Tooltip title='' placement='right'><TextField
    required
    id="outlined-basic"
    variant="outlined"
    fullWidth
    label='Email'
    value={val}
    onChange={(e)=>{handleChange(e)}}
    /></Tooltip>
  : content = <Tooltip arrow title="Invalid Email" placement="right"><TextField
      error
      required
      id="outlined-error-helper-text"
      label="Email"
      value={val}
      fullWidth
      onChange={(e)=>{handleChange(e)}}
/></Tooltip>;

  return (
      <>
        {content}
      </>
  )
}

export default Email
