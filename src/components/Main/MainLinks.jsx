import React from 'react';
import styles from './MainLinks.module.scss';
import {Link} from "react-router-dom";
import IconArrDown from "../../assets/images/arr_down.svg";
import IconArrUp from "../../assets/images/arr_up.svg";
import IconRefresh from "../../assets/images/refresh.svg";


const MainLinks = () => {

    return (
        <div className={`${styles['main-links']} wrap`}>
            <Link to="/wallet/deposit" className={styles.link}>
                <span>Deposit</span>
                <img className={styles.icon} src={IconArrDown} alt=""/>
            </Link>
            <Link to="/wallet/withdraw" className={styles.link}>
                <span>Withdraw</span>
                <img className={styles.icon} src={IconArrUp} alt=""/>
            </Link>
            <Link to="/pro/exchange" className={styles.link}>
                <span>Exchange</span>
                <img className={styles.icon} src={IconRefresh} alt=""/>
            </Link>
        </div>
    );
};

export default MainLinks;
