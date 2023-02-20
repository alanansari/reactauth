import { Button } from '@mui/material';

import React from 'react'

const CommonButton = (props) => {

  let button = (props.disabled === true) ?
    <Button disabled fullWidth variant={props.variant} disableElevation>
      {props.text}
    </Button>
  :
    <Button onClick={()=>{props.handleClick()}} fullWidth variant={props.variant} disableElevation>
      {props.text}
    </Button>
  ;

  return (
    <div className={props.className} style={{margin:props.margin}}>
      {button}
    </div>
  )
}

export default CommonButton
