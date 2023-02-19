import {React} from 'react'
import { TextField } from '@mui/material'

const Password = (props) => {

    function handleChange(e){
        props.setVal(e.target.value);
    }
    
    function handleSpaces(e){
    if(e.key===" ")
        e.preventDefault();
    }

    return (
        <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            fullWidth
            value={props.val}
            margin="normal"
            onChange={(e)=>{handleChange(e)}}
            onKeyDown={(e)=>{handleSpaces(e)}}
        />
    )
}

export default Password
