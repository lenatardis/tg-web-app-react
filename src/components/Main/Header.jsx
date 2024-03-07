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

    return (
        <div className={styles.header}>
            <div>
                <Link to="/account" className={`${styles['icon-wrap']} ${styles['icon-account']}`}>
                    <img src={IconAccount} alt="account"/>
                </Link>
                <p>ID: {id}</p>
            </div>
            {qr && <a className={`${styles['icon-wrap']} ${styles['icon-qr']}`}>
                <img src={IconQr} alt="account"/>
            </a>}
        </div>
    );
};

export default Header;
