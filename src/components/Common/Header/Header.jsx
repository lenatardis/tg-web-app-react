import React from 'react';
import styles from "./Header.module.scss";
import {useNavigate} from "react-router-dom";
import IconArrowLeft from '../../../assets/images/arrow-left.svg';
import Menu from '../../../assets/images/menu.svg';

const Header = ({back, text, menu, close, className}) => {
    let navigate = useNavigate();

    const headerClasses = `${styles.header} ${className}`.trim();

    const handleBackClick = () => {

        if (close && typeof close === 'function') {
            close();
        } else if (typeof back === 'string') {
            navigate(back);
        } else if (back) {
            navigate(-1);
        }
    };

    return (
        <div className={headerClasses}>
            {(back || close) && (
                <span onClick={handleBackClick} className={styles.back}>
                    <img src={IconArrowLeft} alt="back"/>
                </span>
            )}
            {text && (
                <span className={`${styles.title} headerTitle`}>{text}</span>
            )}
            {menu && (
                <span className={styles.menu}><img src={Menu} alt="menu"/></span>
            )}
        </div>
    );
};

export default Header;
