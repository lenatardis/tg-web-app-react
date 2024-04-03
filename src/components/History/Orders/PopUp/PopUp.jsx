import styles from "./PopUp.module.scss";
import ClosePopUp from "../../../Common/HistoryPopUpItem/ClosePopUp/ClosePopUp";
import React from "react";

const PopUp = ({isVisible, closePopUp}) => {

    const radioButtonInfo = {
        option_1: [
            {name: "option_1", value: "All"},
            {name: "option_1", value: "Orders"},
            {name: "option_1", value: "Transactions"},
        ],
        option_2: [
            {name: "option_2", value: "All"},
            {name: "option_2", value: "Limit"},
            {name: "option_2", value: "Market"},
        ],
        option_3: [
            {name: "option_3", value: "24h"},
            {name: "option_3", value: "Last 7d"}
        ],
        option_4: [
            {name: "option_4", value: "All"},
            {name: "option_4", value: "Crypto"},
            {name: "option_4", value: "Fiat"}
        ],
        option_5: [
            {name: "option_5", value: "BTC/USDT"},
            {name: "option_5", value: "BTC/ETH"},
            {name: "option_5", value: "BTC/LTC"},
            {name: "option_5", value: "BTC/BNB"},
            {name: "option_5", value: "BTC/SOL"},
            {name: "option_5", value: "BTC/XLM"},
        ]
    };

    return (
        <div className={`${styles.popup} ${isVisible ? styles['popup-show'] : ''}`}>
            <div className="resize">
                <div className="wrap">
                    <ClosePopUp close={closePopUp}/>
                    <p>popup</p>
                </div>
            </div>
        </div>
    )
}

export default PopUp;