import React from 'react'
import styles from './Login.module.css'
import Email from '../../../components/input/ValidatedEmail'
import Password from '../../../components/input/ValidatedPassword'
import CommonButton from '../../../components/buttons/commonButton';

const Login = () => {
  return (
    <div className={styles.container}> 
      <div className={styles.title_box}>
        <div className={styles.heading}>Login</div>
      </div>
      <div className={styles.form_fields}>
        <Email />
        <Password />
        <CommonButton variant='contained' className="common_btn" text='SUBMIT' margin='3vh 0'/>
      </div>
      <div className={styles.options}>
        <div>Don't have an account? <span className={styles.signup}> Signup</span></div>
      </div>
    </div>
  )
}

export default Login
