import styles from "./Popup.module.scss";
import IconCheck from "../../assets/images/check-circle.svg";
import Button from "../Common/Button";

const AuthDisabledPopUp = ({closePopUp, isVisible}) => {

    return (
        <div className={`${styles['popup']} ${styles['bottom-popup']} ${isVisible ? styles['popup-show'] : ''}`}>
            <div className="resize">
                <div className="wrap">
                    <div className={styles.innerWrap}>
                        <div className={styles.imgWrap}>
                            <img src={IconCheck} alt=""/>
                        </div>
                        <h2>Google Authenticator</h2>
                        <p>Successfully disabled</p>
                        <Button text="Ok" className={styles.btn} handleClick={closePopUp}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthDisabledPopUp;