import {React} from 'react'
import { TextField } from '@mui/material';

const Email = (props) => {

    

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
        />
  )
}

export default Email
