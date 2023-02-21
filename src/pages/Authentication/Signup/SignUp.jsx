import {React,useEffect,useState} from 'react'
import styles from './SignUp.module.css'
import Email from '../../../components/input/ValidatedEmail'
import CommonButton from '../../../components/buttons/commonButton';
import LoadingBtn from '../../../components/buttons/loading';
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const [emailVal,setEmailVal] = useState('');
  const [isValid,setValid] = useState(true);
  const [disability,setDisability] = useState(true);
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    if((emailVal.length>0)&&(isValid)){
      setDisability(false)
    }else{
      setDisability(true)
    }
  },[emailVal,isValid]);

  const navigate = useNavigate();

  function handleClick(link){
      setLoading(true);
      navigate(link,{state:{email:emailVal}});
  }

  const button = (loading) ?
    <LoadingBtn margin='5vh 0 2vh 0'>Submit</LoadingBtn> 
  : <CommonButton
    handleClick={()=>{handleClick('./otp')}}
    disabled={disability} 
    variant='contained' 
    className="common_btn" 
    text='Next' 
    margin='5vh 0 2vh 0'
    />;

  return (
    <div className={styles.container}> 
      <div className={styles.title_box}>
        <div className={styles.heading}>Sign Up</div>
      </div>
      <div className={styles.form_fields}>
        <Email
          id='email'
          val={emailVal}
          setVal={setEmailVal}
          isValid={isValid}
          setValid={setValid}
        />
        {button}
      </div>
      <div className={styles.options}>
        <div>Already a user? &nbsp;
          <span className={styles.login} 
                onClick={()=>{handleClick('../login')}}
                >Login
          </span>
        </div>
      </div>
    </div>
  )
}

export default Signup
