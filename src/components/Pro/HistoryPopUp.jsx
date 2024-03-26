import styles from "./HistoryPopUp.module.scss";
import IconClose from "../../assets/images/close.svg";
import React from "react";
import HistoryPopUpItem from "./HistoryPopUpItem";

const historyInfo = {
    'items': [
        {date1: "24-01-18", date2: "20:29:05", amount: "0.9141 USD", price: "55,691.68 USDT"},
        {date1: "24-01-18", date2: "20:29:05", amount: "0.9141 USD", price: "55,691.68 USDT"},
        {date1: "24-01-18", date2: "20:29:05", amount: "0.9141 USD", price: "55,691.68 USDT"},
        {date1: "24-01-18", date2: "20:29:05", amount: "0.9141 USD", price: "55,691.68 USDT"},
        {date1: "24-01-18", date2: "20:29:05", amount: "0.9141 USD", price: "55,691.68 USDT"},
        {date1: "24-01-18", date2: "20:29:05", amount: "0.9141 USD", price: "55,691.68 USDT"},
        {date1: "24-01-18", date2: "20:29:05", amount: "0.9141 USD", price: "55,691.68 USDT"},
        {date1: "24-01-18", date2: "20:29:05", amount: "0.9141 USD", price: "55,691.68 USDT"},
        {date1: "24-01-18", date2: "20:29:05", amount: "0.9141 USD", price: "55,691.68 USDT"}
    ]
};

const HistoryPopUp = ({closePopUp, isVisible}) => {
    return (
        <div className={`${styles['history-popup']} ${isVisible ? styles['popup-show'] : ''}`}>
            <div className="resize">
                <div className={`wrap ${styles['history-popup__wrap']}`}>
                    <div className={`${styles['history-popup__close']}`}>
                        <button onClick={closePopUp}>
                            <img src={IconClose} alt=""/>
                        </button>
                    </div>
                    <div className={`${styles['history-popup__scrollable-wrap']}`}>
                        {
                            historyInfo.items.map(({date1, date2, amount, price}, index) => (
                                <HistoryPopUpItem key={index} date1={date1} date2={date2} amount={amount}
                                                  price={price}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistoryPopUp;