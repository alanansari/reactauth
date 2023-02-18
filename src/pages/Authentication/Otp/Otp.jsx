import Otp from "../../../components/input/Otp";
import CommonButton from "../../../components/buttons/commonButton";
import styles from './Otp.module.css';
import React from 'react'

const OtpPage = (props) => {
  return (
    <div className={styles.container}> 
      <div className={styles.title_box}>
        <div className={styles.heading}>Otp Verification</div>
      </div>
      <div className={styles.form_fields}>
        <div className={styles.text}>Enter the otp sent to: <b style={{color:'#6b75cd'}}>{props.email}</b></div>
        <Otp margin='1vh 0 3vh 0' />
        <CommonButton variant='outlined' className="common_btn" text='Resend OTP' margin='2vh 0 1vh 0'/>
        <CommonButton variant='contained' className="common_btn" text='Continue' margin='1vh 0 6vh 0'/>
      </div>
      <div className={styles.options}>
      </div>
    </div>
  )
}

export default OtpPage
