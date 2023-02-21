import {React,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Toast from '../../../components/Toast';
import { toast } from 'react-toastify';
import styles from './Login.module.css'
import Email from '../../../components/input/Email'
import Password from '../../../components/input/Password'
import CommonButton from '../../../components/buttons/commonButton';
import axios from 'axios'
import LoadingBtn from '../../../components/buttons/loading';

const Login = () => {

  const [emailVal,setEmailVal] = useState('');
  const [passVal,setPassVal] = useState('');
  const [disability,setDisability] = useState(true);
  const [loading,setLoading] = useState(false);

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

  function handleSubmit(){
    console.log('called');
    setLoading(true);
    axios.post('http://localhost:5000/login',{
      email:emailVal,
      password:passVal
    }).then(res=>{
      setLoading(false);
      console.log(res);
      goToPage('../welcome');
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


  const button = (loading) ?
    <LoadingBtn margin='3vh 0'>Submit</LoadingBtn> 
  : <CommonButton
  handleClick={handleSubmit}
  disabled={disability}
  variant='contained' 
  className="common_btn" 
  text='SUBMIT'
  margin='5vh 0 2vh 0'
  />;

  

  return (
    <div className={styles.container}> 
      <Toast/>
      <div className={styles.title_box}>
        <div className={styles.heading}>Login</div>
      </div>
      <div className={styles.form_fields}>
        <Email id='email' val={emailVal} setVal={setEmailVal} />
        <Password tooltipmsg={''} label='Password' id='password' val={passVal} setVal={setPassVal} />
        {button}
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
