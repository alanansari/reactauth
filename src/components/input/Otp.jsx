import React from 'react'
import { MuiOtpInput } from 'mui-one-time-password-input'

const Otp = (props) => {
  const [otp, setOtp] = React.useState('')

  const handleChange = (newValue) => {
    setOtp(newValue)
  }

  return (
    <div style={{margin:props.margin}}>
    <MuiOtpInput length={6} value={otp} onChange={handleChange} />
    </div>
  )
}

export default Otp