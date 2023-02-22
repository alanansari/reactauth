import React,{useEffect,useState} from 'react'
import axios from 'axios'
import styles from './Fpassword.module.css'
import Email from '../../../components/input/Email'
import CommonButton from '../../../components/buttons/commonButton';
import LoadingBtn from '../../../components/buttons/loading';
import Toast from '../../../components/Toast'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Fpassword = () => {

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

  function handleClick(){
      setLoading(true);
      axios.post('http://localhost:5000/forgotpwd',{
      email:emailVal
    }).then(res=>{
      setLoading(false);
      console.log(res);
      navigate('../otp',{state:{email:emailVal,from:'forgotpwd'}});
    }).catch(err => {
      setLoading(false);
      console.log(err);
      toast.error(`${err.response.data.msg}`, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });
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
      <Toast/> 
      <div className={styles.title_box}>
        <div className={styles.heading}>Forgot Password?</div>
      </div>
      <div className={styles.form_fields}>
      <div className={styles.text}>Enter your accounts email id to send OTP:</div>
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
        <div>Don't have an account? &nbsp;
          <span className={styles.signup} 
                onClick={()=>{navigate('/signup')}}
                >Signup
          </span>
        </div>
      </div>
    </div>
  )
}

export default Fpassword
