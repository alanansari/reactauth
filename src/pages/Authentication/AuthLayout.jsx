import styles from "./AuthLayout.module.css";
import Login from "./Login/Login";
import Signup from "./Signup/SignUp";
import OtpPage from "./Otp/Otp";
import Welcome from "../welcome";
import { Route,Routes,Navigate } from 'react-router-dom';
import SetPassword from "./Password/Setpassword";

const rootdiv = document.getElementById('root');

function trackMouse(e){
  let pos = document.getElementById('lightbox');
  pos.style.setProperty('--x',e.clientX + 'px');
  pos.style.setProperty('--y',e.clientY + 'px');
}

rootdiv.addEventListener('mousemove',(e)=>{trackMouse(e)});


export default function AuthLayout(props){
    return(
        <div className={styles.AuthLayout}>
            <div id='lightbox' className={styles.lightbox}></div>
            
            <div className={styles.form_box}>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/login" />}></Route>
                    <Route path='/login' element={ <Login/> } />
                    <Route path='/signup' element={ <Signup /> } />
                    <Route path='/signup/otp' element={ <OtpPage /> } />
                    <Route path='/setpassword' element={ <SetPassword /> } />
                    <Route path='/welcome' element={ <Welcome /> } />
                    <Route path='/*' element={<Navigate replace to='../' />} />
                </Routes>
            </div>

        </div>
    )
} 