import React from "react";
import Header from "../Common/Header/Header";
import styles from "./Warning.module.scss";
import IconLock from "../../assets/images/lock.svg";
import Button from "../Common/Button";
import {useNavigate} from "react-router-dom";
import {setGoogleAuth} from "../../store/user-slice";
import {useDispatch} from "react-redux";

const Warning = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const handleContinue = () => {
        navigate('/verification/confirmation');
    }

    const handleCancel = () => {
        navigate('/verification/switcher');
    }

    return (
        <div className={styles.warningPage}>
            <Header text="Two factor verification" back/>
            <div className="wrap">
               <div className={styles.imgWrap}>
                   <img src={IconLock} alt=""/>
               </div>
                <div className={styles.infoBlock}>
                    <p>Disabling two-factor authentication (2FA) exposes your account to a high risk <br/>
                        of unauthorized access. If you decide<br/>
                        to disable (2FA), we strongly recommend that you enable it again as soon as possible.<br/>
                        If unusual activity is detected after<br/>
                        the shutdown (2FA) , you will not be able<br/>
                        to withdraw funds or sell assets on the P2P platform for 24 hours.</p>
                </div>
                <Button text="I get it, continue" handleClick={handleContinue} className={styles.continueBtn}/>
                <Button text="Cancel" handleClick={handleCancel} className={styles.cancelBtn}/>
            </div>
        </div>
    )
}

export default Warning;