import React from 'react'
import styles from './Login.module.css'
import Email from '../../../components/input/Email'
import Password from '../../../components/input/Password'
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
        <CommonButton className="login_btn" text='SUBMIT'/>
      </div>
      <div className={styles.options}>
      </div>
    </div>
  )
}

export default Login
