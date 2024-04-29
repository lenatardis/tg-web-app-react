import React, {useEffect, useState} from "react";
import Header from "../Common/Header/Header";
import styles from "./Switcher_page.module.scss";
import Switcher from "./Switcher";
import PopUp from "./Popup";
import {getGoogleAuth} from "../../store/selectors";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const SwitcherPage = () => {
    const [popUp, setPopUp] = useState(false);
    const [telegramBotEnabled, setTelegramBotEnabled] = useState(false);
    const [googleAuthEnabled, setGoogleAuthEnabled] = useState(true);

    let isGoogleAuthEnabled = useSelector(getGoogleAuth);
    let navigate = useNavigate();

    const openPopUp = () => {
        setPopUp(true);
    }

    const closePopUp = () => {
        setPopUp(false);
    }

    const toggleTelegramBot = () => {
        setTelegramBotEnabled(prevState => !prevState);
    };

    const toggleGoogleAuth = () => {
        setGoogleAuthEnabled(prevState => {
            if (prevState) {
                navigate('/verification/warning');
            }
            return !prevState;
        });
    };

    useEffect(() => {
        setGoogleAuthEnabled(isGoogleAuthEnabled);
        if (!isGoogleAuthEnabled) {
            openPopUp();
        }
    }, []);

    return (
        <div className={styles.switcherPage}>
            <Header text="Two factor verification" back/>
            <div className={`wrap ${styles.switcherBlock}`}>
                <div className={styles.block}>
                    <div>
                        <h2>Telegram bot</h2>
                        <p>Protects your account and<br/>transactions, works through<br/>Telegram Bot @S WalletBot</p>
                    </div>
                    <div>
                        <Switcher isOn={telegramBotEnabled} toggleSwitch={toggleTelegramBot}/>
                    </div>
                </div>
                <div className={styles.block}>
                    <div>
                        <h2>Google Authenticator</h2>
                        <p>Protects your account and<br/>transactions</p>
                    </div>
                    <div>
                        <Switcher isOn={googleAuthEnabled} toggleSwitch={toggleGoogleAuth}/>
                    </div>
                </div>
                <PopUp closePopUp={closePopUp} isVisible={popUp}/>
            </div>
        </div>
    )
}

export default SwitcherPage;