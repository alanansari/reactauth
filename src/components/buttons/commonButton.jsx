import { Button } from '@mui/material';

import React from 'react'

const CommonButton = (props) => {
  return (
    <div className={props.className}>
    <Button fullWidth variant="contained" disableElevation>
        {props.text}
    </Button>
    </div>
  )
}

export default CommonButton
