import React,{useEffect, useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import styles from './setpassword.module.css'
import Toast from '../../../components/Toast'
import Password from '../../../components/input/Password'
import ValPassword from '../../../components/input/ValidatedPassword'
import LoadingBtn from '../../../components/buttons/loading'
import CommonButton from '../../../components/buttons/commonButton'
import { validatePass } from '../../../utils/vallidate'

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

    function goToPage(link){
        navigate(link);
    }

    function handleSubmit(){
        setLoading(true);
        console.log(location.state.email);
        goToPage('/welcome');
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
            <Password tooltipmsg={matchMsg} label='Confirm Password' id='password' val={conpassValue} setVal={setConPassValue} />
            {button}
          </div>
          <div className={styles.options}>
          </div>
        </div>
      )
}

export default SetPassword
