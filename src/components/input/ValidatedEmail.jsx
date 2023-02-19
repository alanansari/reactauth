import React, { useState } from 'react'
import { TextField, Tooltip } from '@mui/material';
import { validateEmail } from '../../utils/vallidate';


const Email = () => {

  const [val,setVal] = useState('');
  const [isValid,setValid] = useState(true);

  function handleChange(e) {
    let value = e.target.value;
    setVal(value.trim())
    if(value!=='')
    setValid(validateEmail(value));
  }

  let content;

  (isValid)?
    content = <Tooltip title='' placement='right'><TextField
    required
    id="outlined-basic"
    variant="outlined"
    fullWidth
    label="Email"
    margin="normal"
    value={val}
    onChange={(e)=>{handleChange(e)}}
    /></Tooltip>
  : content = <Tooltip arrow title="Invalid Email" placement="right"><TextField
      error
      required
      id="outlined-error"
      label="Email"
      margin="normal"
      value={val}
      fullWidth
      onChange={(e)=>{handleChange(e)}}
/></Tooltip>;

  return (
      <div>
        {content}
      </div>
  )
}

export default Email
