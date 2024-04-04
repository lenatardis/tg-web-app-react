import styles from "./Wallet.module.scss";
import Header from "../Common/Header/Header";
import RadioButton from "../Common/RadioButton/RadioButton";
import React, {useState} from "react";

const Wallet = () => {
    const [selectedOption1, setSelectedOption1] = useState('All');

    const radioButtonInfo = {
        option_1: [
            {name: "option_1", value: "All"},
            {name: "option_1", value: "Crypto"},
            {name: "option_1", value: "Fiat"},
        ]
    }

    return (
        <div>
            <Header back text="Wallet" menu />
            <div className={`${styles.main} wrap`}>
                <h2 className='title'>Wallet</h2>
                <div className={styles.row}>
                    {
                        radioButtonInfo.option_1.map(({name, value}) => (
                            <RadioButton key={value} name={name} value={value} selected={selectedOption1}
                                         onSelect={setSelectedOption1} inner/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Wallet;