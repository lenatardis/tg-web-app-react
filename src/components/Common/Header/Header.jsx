import React from 'react';
import styles from "./Header.module.scss";
import {useNavigate} from "react-router-dom";
import IconArrowLeft from '../../../assets/images/arrow-left.svg';
import Menu from '../../../assets/images/menu.svg';

const Header = ({back, text, menu}) => {
    let navigate = useNavigate();

    return (
        <div className={styles.header}>
            {back && (
                <span onClick={() => {
                    navigate(-1)
                }} className={styles.back}>
               <img src={IconArrowLeft} alt="back"/>
           </span>
            )}
            {text && (
                <span className={styles.title}>{text}</span>
            )}
            {menu && (
                <span className={styles.menu}><img src={Menu} alt="menu"/></span>
            )}
        </div>
    );
};

export default Header;
