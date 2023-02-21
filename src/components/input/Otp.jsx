import React from 'react'
import { MuiOtpInput } from 'mui-one-time-password-input'

const Otp = (props) => {

  return (
    <div style={{margin:props.margin}}>
    <MuiOtpInput length={6} value={props.otp} onChange={props.handleChange} />
    </div>
  )
}

export default Otp