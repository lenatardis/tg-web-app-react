import styles from "./CurrencyPopUp.module.scss";
import React from "react";
import Header from "../Common/Header/Header";

const CurrencyPopUp = ({closePopUp}) => {
    return (
        <div className={`${styles['currency-popup']}`}>
            <div className="resize">
                <Header back text="Exchange" menu close={closePopUp}/>
                <p>Currency popup</p>
            </div>
        </div>
    )
}

export default CurrencyPopUp;