import styles from "./Orders.module.scss";
import Header from "../../Common/Header/Header";
import NavLinks from "../../Common/NavLinks/NavLinks";
import useSubRoute from "../../../hooks/useSubRoute";
import PopUpLink from "../PopUpLink/PopUpLink";
import HistoryPopUpItem from "../../Common/HistoryPopUpItem/HistoryPopUpItem";
import React from "react";

const Orders = () => {
    let subroute = useSubRoute();

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
    return (
        <div>
            <Header back text="History"/>
            <div className="wrap">
                <NavLinks subroute={subroute} text1="Orders" link1="/history/orders" text2="Transactions" link2="/history/transactions"/>
                <div className={styles.linkBlock}>
                    <PopUpLink text="Filter"/>
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
        </div>
    )
}

export default Orders;