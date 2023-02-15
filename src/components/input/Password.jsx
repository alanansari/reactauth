import React from 'react'
import { TextField } from '@mui/material';

const Password = () => {
    return (
        <TextField
          id="outlined-password-input"
          label="Password *"
          type="password"
          fullWidth='true'
          autoComplete="current-password"
        />
    )
}

export default Password
