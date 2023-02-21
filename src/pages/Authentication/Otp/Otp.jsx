import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Otp from "../../../components/input/Otp";
import CommonButton from "../../../components/buttons/commonButton";
import LoadingBtn from '../../../components/buttons/loading';
import styles from './Otp.module.css';
import { useLocation,useNavigate } from 'react-router-dom';
import Toast from '../../../components/Toast';
import { toast } from 'react-toastify';

const OtpPage = () => {
  const [disability,setDisability] = useState(true);
  const [loading,setLoading] = useState(false);
  const [otp, setOtp] = React.useState('');
  const [seconds,setSeconds] = useState(29);
  const [resendDisabled,setResendDisabled] = useState(true);

  const handleChange = (newValue) => {
    setOtp(newValue)
  }

  useEffect(()=>{
    console.log(otp.length);
    if(otp.length===6)
      setDisability(false);
    else
      setDisability(true);
  },[otp]);

  useEffect(()=>{
     const timer =
    seconds > 0 && setTimeout(()=>{
        setSeconds(seconds-1);
    },1000)
    if(seconds===0){
      setResendDisabled(false);
    }
    return ()=> clearInterval(timer)
  },[seconds])


  const location = useLocation();

  const navigate = useNavigate();

  function goToPage(link,token=null){
      navigate(link,{state:{token}});
  }

  function handleClick(){
    axios.post('http://localhost:5000/email',{
      email:location.state.email
    }).then(res=>{
      toast.success(`${res.data.msg}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setSeconds(10);
      setResendDisabled(true);
    })
    .catch(err=>{
      console.log(err);
      toast.error(`${err.response.data.msg}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });
    
  }

  function handleSubmit(){
      setLoading(true);
      axios.post('http://localhost:5000/email/verify',{
      email:location.state.email,
      otp:otp
    }).then(res=>{
      setLoading(false);
      console.log(res);
      goToPage('../setpassword',res.data.token);
    }).catch(err => {
      setLoading(false);
      console.log(err);
      toast.error(`${err.response.data.msg}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });
  }

  const submitbutton = (loading) ?
    <LoadingBtn margin='2vh 0 6vh 0'>Submit</LoadingBtn> 
  : <CommonButton
      disabled={disability}
      variant='contained'
      className="common_btn"
      text='Continue'
      margin='2vh 0 6vh 0'
      handleClick={handleSubmit}
    />;

  return (
    <div className={styles.container}>
      <Toast/> 
      <div className={styles.title_box}>
        <div className={styles.heading}>Otp Verification</div>
      </div>
      <div className={styles.form_fields}>
        <div className={styles.text}>Enter the otp sent to: 
          <b style={{color:'#6b75cd'}}>{location.state.email}</b>
        </div>
        <Otp otp={otp} handleChange={handleChange} margin='1vh 0 3vh 0' />
        <CommonButton
          handleClick={handleClick}
          disabled={resendDisabled}
          variant='outlined'
          className="common_btn"
          text={`${seconds || ''} Resend Otp`}
          margin='3vh 0 1vh 0'/>
        {submitbutton}
      </div>
      <div className={styles.options}>
      </div>
    </div>
  )
}

export default OtpPage
