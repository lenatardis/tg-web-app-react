import styles from "./HistoryPopUp.module.scss";
import React, {useEffect, useState} from "react";
import HistoryPopUpItem from "../../../Common/HistoryPopUpItem/HistoryPopUpItem";
import ClosePopUp from "../../../Common/ClosePopUp/ClosePopUp";

let historyInfo = {
    'items': [
        {date: "24-01-18", time: "20:29:05", amount: "0.9141 USD", price: "55,691.68 USDT"},
        {date: "24-01-18", time: "20:15:10", amount: "0.9145 USD", price: "55,691.68 USDT"},
        {date: "24-01-18", time: "20:09:08", amount: "0.9149 USD", price: "55,691.68 USDT"},
        {date: "24-01-18", time: "20:20:05", amount: "0.9128 USD", price: "55,691.68 USDT"},
        {date: "24-01-18", time: "19:29:05", amount: "0.9105 USD", price: "55,691.68 USDT"},
        {date: "24-01-18", time: "19:20:07", amount: "0.9197 USD", price: "55,691.68 USDT"},
        {date: "24-01-18", time: "19:10:00", amount: "0.9143 USD", price: "55,691.68 USDT"},
        {date: "24-01-18", time: "15:00:45", amount: "0.9145 USD", price: "55,691.68 USDT"},
        {date: "24-01-18", time: "14:30:40", amount: "0.9149 USD", price: "55,691.68 USDT"}
    ]
};

const HistoryPopUp = ({closePopUp, isVisible}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(historyInfo.items);
    }, []);

    const handleDelete = (deleteIndex) => {
        let updatedItems = [...items].filter((el, index) => {
            return index !== deleteIndex
        });
        setItems(updatedItems);
    }

    return (
        <div
            className={`${styles['history-popup']} ${styles['bottom-popup']} ${isVisible ? styles['popup-show'] : ''}`}>
            <div className="resize">
                <div className={`wrap ${styles['history-popup__wrap']}`}>
                    <ClosePopUp close={closePopUp}/>
                    <div className={`${styles['history-popup__scrollable-wrap']}`}>
                        {
                            items.map(({date, time, amount, price}, index) => (
                                <HistoryPopUpItem key={index} date={date} time={time} amount={amount}
                                                  price={price} deleteItem={() => handleDelete(index)}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistoryPopUp;