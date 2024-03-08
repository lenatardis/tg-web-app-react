import React, {useEffect} from 'react';
import styles from "./Header.module.scss";
import {useNavigate, Link} from "react-router-dom";
import IconAccount from '../../assets/images/account.svg';
import IconQr from '../../assets/images/qr_icon.svg';
import {useTelegram} from "../../hooks/useTelegram";

const Header = ({qr}) => {
    let navigate = useNavigate();

    const {tg} = useTelegram();

    let id;
    if (typeof tg.initDataUnsafe === 'string') {
        let initData = JSON.parse(tg.initDataUnsafe);
        id = initData?.user?.id;
    } else {
        id = tg.initDataUnsafe?.user?.id;
    }

    let scanParams = {
        text: "Please scan your QR code here."
    };

    function onQrScanned(text) {
        console.log("QR Code Text:", text);
        alert('Text is '+text);
        console.log(text);
        return true;
    }

    const handleScanner = () => {
       console.log('click');
        /*tg.showScanQrPopup(scanParams, onQrScanned);*/
        if (tg && typeof tg.showScanQrPopup === 'function') {
            try {
                tg.showScanQrPopup(scanParams, onQrScanned);
            } catch (error) {
                console.error("Error showing QR popup:", error);
            }
        } else {
            console.error("Telegram API or showScanQrPopup method not available.");
        }
    }


    return (
        <div className={styles.header}>
            <div>
                <Link to="/account" className={`${styles['icon-wrap']} ${styles['icon-account']}`}>
                    <img src={IconAccount} alt="account"/>
                </Link>
                <p>ID: {id}</p>
            </div>
            {qr && <a className={`${styles['icon-wrap']} ${styles['icon-qr']}`} onClick={handleScanner}>
                <img src={IconQr} alt="account"/>
            </a>}
        </div>
    );
};

export default Header;
