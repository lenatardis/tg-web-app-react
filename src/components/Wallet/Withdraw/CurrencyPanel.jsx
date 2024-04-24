import styles from "./CurrencyPanel.module.scss";
import React from "react";

const CurrencyPanel = ({light, text1, text2}) => {
    return (
        <div className={`${styles.currencyPanel} ${light ? styles.light : ''}`}>
            <p>- {text1}</p>
            <p>= {text2}$</p>
        </div>
    )
}

export default CurrencyPanel;