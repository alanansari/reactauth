import styles from "./AuthLayout.module.css";
import Login from "./Login/Login";
import Signup from "./Signup/SignUp";
import OtpPage from "./Otp/Otp";
import Welcome from "../welcome";
import { Route,Routes,Navigate } from 'react-router-dom';

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
                    <Route path='/welcome' element={ <Welcome /> } />
                </Routes>
            </div>

        </div>
    )
} 