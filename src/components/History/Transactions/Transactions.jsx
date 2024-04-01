import styles from "./Transactions.module.scss";
import historyStyles from "../History.module.scss";
import Header from "../../Common/Header/Header";
import NavLinks from "../../Common/NavLinks/NavLinks";
import useSubRoute from "../../../hooks/useSubRoute";
import React, {useState} from "react";
import RadioButton from "../../Common/RadioButton/RadioButton";
import PopUpLink from "../PopUpLink/PopUpLink";

const Transactions = () => {
    let subroute = useSubRoute();
    const [selectedOption1, setSelectedOption1] = useState('All');

    const radioButtonInfo = {
        option_1: [
            {name: "option1", value: "All"},
            {name: "option1", value: "Send"},
            {name: "option1", value: "Receive"},
        ]
    };
    return (
        <div>
            <Header back text="History"/>
            <div className="wrap">
                <NavLinks subroute={subroute} text1="Orders" link1="/history/orders" text2="Transactions" link2="/history/transactions"/>
                <div className={historyStyles.row}>
                    {
                        radioButtonInfo.option_1.map(({name, value}) => (
                            <RadioButton key={value} name={name} value={value} selected={selectedOption1}
                                         onSelect={setSelectedOption1}/>
                        ))
                    }
                </div>
                <div className={styles.linkBlock}>
                    <PopUpLink text="Choose currency"/>
                </div>
            </div>
        </div>
    )
}

export default Transactions;