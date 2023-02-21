import React,{useEffect, useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import styles from './setpassword.module.css'
import Password from '../../../components/input/Password'
import ValPassword from '../../../components/input/ValidatedPassword'
import LoadingBtn from '../../../components/buttons/loading'
import CommonButton from '../../../components/buttons/commonButton'
import { validatePass } from '../../../utils/vallidate'
import axios from 'axios'
import Toast from '../../../components/Toast';
import { toast } from 'react-toastify';

const SetPassword = () => {

    const [passValue,setPassValue] = useState('');
    const [conpassValue,setConPassValue] = useState('');
    const [disability,setDisability] = useState(true);
    const [loading,setLoading] = useState(false);
    const [matchMsg,setMatchMsg] = useState('');

    const location = useLocation();

    useEffect(()=>{
        if(conpassValue!==passValue)
            setMatchMsg('password and confirm password do not match');
        else
            setMatchMsg('');
        
        if(validatePass(passValue)&&conpassValue===passValue){
            setDisability(false)
        }
        else
            setDisability(true)
            
    },[passValue,conpassValue]);

    const navigate = useNavigate();

    function handleSubmit(){
        setLoading(true);
        axios.post('http://localhost:5000/signup',
            {password:passValue},{
            headers:{
                'authorization':location.state.token
            }}
        ).then(res=>{
            setLoading(false);
            console.log(res);
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
            navigate('../welcome');
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
    <LoadingBtn margin='3vh 0'>
    </LoadingBtn> 
    : <CommonButton
        handleClick={handleSubmit}
        disabled={disability}
        variant='contained' 
        className="common_btn" 
        text='SUBMIT'
        margin='3vh 0'
    />;

    return (
        <div className={styles.container}> 
          <Toast/>
          <div className={styles.title_box}>
            <div className={styles.heading}>Set Password</div>
          </div>
          <div className={styles.form_fields}>
            <ValPassword label='Password' val={passValue} setVal={setPassValue} />
            <Password 
                tooltipmsg={matchMsg} 
                label='Confirm Password' 
                id='password' 
                val={conpassValue} 
                setVal={setConPassValue} />
            {button}
          </div>
          <div className={styles.options}>
          </div>
        </div>
      )
}

export default SetPassword
