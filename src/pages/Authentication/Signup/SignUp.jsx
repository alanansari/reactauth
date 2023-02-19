import React from 'react'
import styles from './SignUp.module.css'
import Email from '../../../components/input/ValidatedEmail'
import CommonButton from '../../../components/buttons/commonButton';
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const navigate = useNavigate();

  function handleClick(link){
      navigate(link);
  }

  return (
    <div className={styles.container}> 
      <div className={styles.title_box}>
        <div className={styles.heading}>Sign Up</div>
      </div>
      <div className={styles.form_fields}>
        <Email />
        <CommonButton variant='contained' className="common_btn" text='Next' margin='5vh 0'/>
      </div>
      <div className={styles.options}>
        <div>Already a user? <span className={styles.login} onClick={()=>{handleClick('../login')}}> Login</span></div>
      </div>
    </div>
  )
}

export default Signup
