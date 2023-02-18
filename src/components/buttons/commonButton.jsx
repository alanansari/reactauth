import { Button } from '@mui/material';

import React from 'react'

const CommonButton = (props) => {
  return (
    <div className={props.className} style={{margin:props.margin}}>
    <Button fullWidth variant={props.variant} disableElevation>
        {props.text}
    </Button>
    </div>
  )
}

export default CommonButton
