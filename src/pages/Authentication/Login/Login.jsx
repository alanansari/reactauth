import {React,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import Email from '../../../components/input/Email'
import Password from '../../../components/input/Password'
import CommonButton from '../../../components/buttons/commonButton';


const Login = () => {

  const [emailVal,setEmailVal] = useState('');
  const [passVal,setPassVal] = useState('');

  let [disability,setDisability] = useState(true);
  console.log(disability);

  useEffect(()=>{
    if((emailVal.length>0)&&(passVal.length>0)){
      setDisability(false)
    }else{
      setDisability(true)
    }
  },[emailVal,passVal]);

  const navigate = useNavigate();
  function goToPage(link){
      navigate(link);
  }

  return (
    <div className={styles.container}> 
      <div className={styles.title_box}>
        <div className={styles.heading}>Login</div>
      </div>
      <div className={styles.form_fields}>
        <Email val={emailVal} setVal={setEmailVal} />
        <Password val={passVal} setVal={setPassVal} />
        <CommonButton
          disabled={disability}
          variant='contained' 
          className="common_btn" 
          text='SUBMIT'
          margin='3vh 0'
          />
      </div>
      <div className={styles.options}>
        <div>Don't have an account? &nbsp;
           <span 
              className={styles.signup}
              onClick={()=>{goToPage('../signup')}}>
                Signup
            </span>
        </div>
      </div>
    </div>
  )
}

export default Login
