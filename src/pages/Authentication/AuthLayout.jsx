import Login from "./Login/Login";
import styles from "./AuthLayout.module.css";

export default function AuthLayout(props){
    return(
        <div className={styles.AuthLayout}>
            <div className={styles.header}>
            </div>
            <div className={styles.body}>
                <Login />
            </div>
            <div className={styles.footer}>
            </div>
        </div>
    )
} 