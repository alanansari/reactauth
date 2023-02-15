import React from 'react'
import styles from './Login.module.css'
import Email from '../../../components/input/Email'
import Password from '../../../components/input/Password'

const Login = () => {
  return (
    <div className={styles.container}> 
      <Email />
      <br /><br />
      <Password />
    </div>
  )
}

export default Login
