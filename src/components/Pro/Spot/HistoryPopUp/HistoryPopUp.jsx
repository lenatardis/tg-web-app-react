import styles from "./HistoryPopUp.module.scss";
import IconClose from "../../../../assets/images/close.svg";
import React from "react";
import HistoryPopUpItem from "../../../Common/HistoryPopUpItem/HistoryPopUpItem";
import ClosePopUp from "../../../Common/HistoryPopUpItem/ClosePopUp/ClosePopUp";

const historyInfo = {
    'items': [
        {date: "24-01-18", time: "20:29:05", amount: "0.9141 USD", price: "55,691.68 USDT"},
        {date: "24-01-18", time: "20:29:05", amount: "0.9141 USD", price: "55,691.68 USDT"},
        {date: "24-01-18", time: "20:29:05", amount: "0.9141 USD", price: "55,691.68 USDT"},
        {date: "24-01-18", time: "20:29:05", amount: "0.9141 USD", price: "55,691.68 USDT"},
        {date: "24-01-18", time: "20:29:05", amount: "0.9141 USD", price: "55,691.68 USDT"},
        {date: "24-01-18", time: "20:29:05", amount: "0.9141 USD", price: "55,691.68 USDT"},
        {date: "24-01-18", time: "20:29:05", amount: "0.9141 USD", price: "55,691.68 USDT"},
        {date: "24-01-18", time: "20:29:05", amount: "0.9141 USD", price: "55,691.68 USDT"},
        {date: "24-01-18", time: "20:29:05", amount: "0.9141 USD", price: "55,691.68 USDT"}
    ]
};

const HistoryPopUp = ({closePopUp, isVisible}) => {
    return (
        <div className={`${styles['history-popup']} ${isVisible ? styles['popup-show'] : ''}`}>
            <div className="resize">
                <div className={`wrap ${styles['history-popup__wrap']}`}>
                    <ClosePopUp close={closePopUp}/>
                    <div className={`${styles['history-popup__scrollable-wrap']}`}>
                        {
                            historyInfo.items.map(({date, time, amount, price}, index) => (
                                <HistoryPopUpItem key={index} date={date} time={time} amount={amount}
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