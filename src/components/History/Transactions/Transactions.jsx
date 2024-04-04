import styles from "./Transactions.module.scss";
import historyStyles from "../History.module.scss";
import Header from "../../Common/Header/Header";
import NavLinks from "../../Common/NavLinks/NavLinks";
import useSubRoute from "../../../hooks/useSubRoute";
import React, {useState} from "react";
import RadioButton from "../../Common/RadioButton/RadioButton";
import PopUpLink from "../PopUpLink/PopUpLink";
import ListItem from "./ListItem";
import PopUp from "../Transactions/PopUp/PopUp";

const Transactions = () => {
    let subroute = useSubRoute();
    const [selectedOption1, setSelectedOption1] = useState('All');
    const [popUp, setPopUp] = useState(false);

    const radioButtonInfo = {
        option_1: [
            {name: "option1", value: "All"},
            {name: "option1", value: "Send"},
            {name: "option1", value: "Receive"},
        ]
    };

    const listInfo = {
        items: [
            {name: "4WH...JRloe", value: "-191.201 USDT", date: '24-01-18', time: '20:29:05'},
            {name: "R0v7...1TItZ", value: "+321.201 USDT", date: '24-01-15', time: '21:45:23'},
            {name: "R0v7...1TItZ", value: "+321.201 USDT", date: '24-01-13', time: '08:12:03'},
            {name: "R0v7...1TItZ", value: "+321.201 USDT", date: '24-01-12', time: '13:16:16'},
            {name: "R0v7...1TItZ", value: "+321.201 USDT", date: '24-01-11', time: '14:30:01'},
            {name: "R0v7...1TItZ", value: "+321.201 USDT", date: '24-01-10', time: '15:00:45'}
        ]
    }

    const openPopUp = () => {
        setPopUp(true);
    }

    const closePopUp = () => {
        setPopUp(false);
    }

    return (
        <div>
            <Header back text="History"/>
            <div className="wrap">
                <NavLinks subroute={subroute} text1="Orders" link1="/history/orders" text2="Transactions"
                          link2="/history/transactions"/>
                <div className={historyStyles.row}>
                    {
                        radioButtonInfo.option_1.map(({name, value}) => (
                            <RadioButton key={value} name={name} value={value} selected={selectedOption1}
                                         onSelect={setSelectedOption1}/>
                        ))
                    }
                </div>
                <div className={styles.linkBlock}>
                    <PopUpLink text="Choose currency" open={openPopUp}/>
                </div>
                <div className={styles.transactionsBlock}>
                    {
                        listInfo.items.map(({name, value, date, time}, index) => (
                            <ListItem key={index} name={name} value={value} date={date} time={time}/>
                        ))
                    }
                </div>
            </div>
            <PopUp closePopUp={closePopUp} isVisible={popUp}/>
        </div>
    )
}

export default Transactions;