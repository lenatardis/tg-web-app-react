import React from 'react';
import styles from "./CurrencyBar.module.scss";
import {useNavigate} from "react-router-dom";

const CurrencyBar = () => {
    let navigate = useNavigate();

    return (
        <div className={styles.header}>

        </div>
    );
};

export default CurrencyBar;
