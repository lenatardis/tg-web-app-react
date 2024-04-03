import styles from "./Orders.module.scss";
import Header from "../../Common/Header/Header";
import NavLinks from "../../Common/NavLinks/NavLinks";
import useSubRoute from "../../../hooks/useSubRoute";
import PopUpLink from "../PopUpLink/PopUpLink";
import HistoryPopUpItem from "../../Common/HistoryPopUpItem/HistoryPopUpItem";
import React, {useEffect, useState} from "react";
import PopUp from "./PopUp/PopUp";

const Orders = () => {
    let subroute = useSubRoute();
    const [popUp, setPopUp] = useState(false);

    const ordersInfo = {
        'items': [
            {date: "24-01-18", time: "20:29:05", accepted:true, type:'market', amount: "0.9141 USD", price: "55,691.68 USDT"},
            {date: "24-01-18", time: "20:29:05", accepted:false, type:'limit', amount: "0.9141 USD", price: "55,691.68 USDT"},
            {date: "24-01-18", time: "20:29:05", accepted:true, type:'market', amount: "0.9141 USD", price: "55,691.68 USDT"},
            {date: "24-01-18", time: "20:29:05", accepted:true, type:'limit', amount: "0.9141 USD", price: "55,691.68 USDT"},
            {date: "24-01-18", time: "20:29:05", accepted:true, type:'market', amount: "0.9141 USD", price: "55,691.68 USDT"},
            {date: "24-01-18", time: "20:29:05", accepted:true, type:'limit', amount: "0.9141 USD", price: "55,691.68 USDT"},
            {date: "24-01-18", time: "20:29:05", accepted:true, type:'market', amount: "0.9141 USD", price: "55,691.68 USDT"},
            {date: "24-01-18", time: "20:29:05", accepted:true, type:'limit', amount: "0.9141 USD", price: "55,691.68 USDT"},
            {date: "24-01-18", time: "20:29:05", accepted:true, type:'market', amount: "0.9141 USD", price: "55,691.68 USDT"}
        ]
    };
    const openPopUp = () => {
        setPopUp(true);
    }

    const closePopUp = () => {
        setPopUp(false);
    }

    useEffect(() => {
        if (popUp) {
            document.body.classList.add('noscroll');
        } else {
            document.body.classList.remove('noscroll');
        }

        return () => {
            document.body.classList.remove('noscroll');
        };
    }, [popUp]);

    return (
        <div>
            <Header back text="History"/>
            <div className="wrap">
                <NavLinks subroute={subroute} text1="Orders" link1="/history/orders" text2="Transactions" link2="/history/transactions"/>
                <div className={styles.linkBlock}>
                    <PopUpLink text="Filter" open={openPopUp}/>
                </div>
                <div className={styles.orderBlock}>
                    {
                        ordersInfo.items.map(({date, time, amount, price, accepted, type}, index) => (
                            <HistoryPopUpItem key={index} date={date} time={time} amount={amount}
                                              price={price} accepted={accepted} type={type} parent="orders"/>
                        ))
                    }
                </div>
            </div>
            <PopUp closePopUp={closePopUp} isVisible={popUp}/>
        </div>
    )
}

export default Orders;