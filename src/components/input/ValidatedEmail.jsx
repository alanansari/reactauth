import React from 'react'
import { TextField, Tooltip } from '@mui/material';
import { validateEmail } from '../../utils/vallidate';

const Email = (props) => {

  function handleChange(e) {
    let value = e.target.value;
    props.setVal(value.trim())
    if(value!=='')
    props.setValid(validateEmail(value));
  }

  let content =
  (props.isValid)?
  <Tooltip title='' placement='right'><TextField
    required
    id="outlined-basic"
    variant="outlined"
    fullWidth
    label="Email"
    margin="normal"
    value={props.val}
    onChange={(e)=>{handleChange(e)}}
  /></Tooltip>
  : <Tooltip arrow title="Invalid Email" placement="right"><TextField
      error
      required
      id="outlined-error"
      label="Email"
      margin="normal"
      value={props.val}
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
