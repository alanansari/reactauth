import {React} from 'react'
import { TextField } from '@mui/material';

const Email = (props) => {

    function handleSpaces(e){
        if(e.key===" ")
            e.preventDefault();
    }

    function handleChange(e) {
        let value = e.target.value;
        props.setVal(value.trim());
    }

    return (
        <TextField
            required
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Email"
            margin="normal"
            value={props.val}
            onChange={(e)=>{handleChange(e)}}
            onKeyDown={(e)=>{handleSpaces(e)}}
        />
  )
}

export default Email
