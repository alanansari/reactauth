import styles from "./AuthLayout.module.css";
import Login from "./Login/Login";

function trackMouse(e){
    let pos = document.getElementById('lightbox');
    pos.style.setProperty('--x',e.clientX + 'px');
    pos.style.setProperty('--y',e.clientY + 'px');
}

export default function AuthLayout(props){
    return(
        <div className={styles.AuthLayout}>
            <div id='lightbox' onMouseMove={(e)=>{trackMouse(e)}} className={styles.lightbox}></div>
            <div className={styles.form_box}>
                <Login />
            </div>
        </div>
    )
} 