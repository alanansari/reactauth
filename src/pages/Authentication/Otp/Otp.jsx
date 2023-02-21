import React,{useState} from 'react'
import Otp from "../../../components/input/Otp";
import CommonButton from "../../../components/buttons/commonButton";
import LoadingBtn from '../../../components/buttons/loading';
import styles from './Otp.module.css';
import { useLocation,useNavigate } from 'react-router-dom'

const OtpPage = () => {
  const [loading,setLoading] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  function goToPage(link){
      navigate(link,{state:{email:location.state.email}});
  }

  function handleSubmit(){
      setLoading(true);
      goToPage('../setpassword');
  }

  const submitbutton = (loading) ?
    <LoadingBtn margin='2vh 0 6vh 0'>Submit</LoadingBtn> 
  : <CommonButton 
      variant='contained' 
      className="common_btn" 
      text='Continue' 
      margin='2vh 0 6vh 0' 
      handleClick={handleSubmit}
    />;

  return (
    <div className={styles.container}> 
      <div className={styles.title_box}>
        <div className={styles.heading}>Otp Verification</div>
      </div>
      <div className={styles.form_fields}>
        <div className={styles.text}>Enter the otp sent to: <b style={{color:'#6b75cd'}}>{location.state.email}</b></div>
        <Otp margin='1vh 0 3vh 0' />
        <CommonButton variant='outlined' className="common_btn" text='Resend OTP' margin='3vh 0 1vh 0'/>
        {submitbutton}
      </div>
      <div className={styles.options}>
      </div>
    </div>
  )
}

export default OtpPage
