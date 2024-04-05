import styles from "./Wallet.module.scss";
import Header from "../Common/Header/Header";
import RadioButton from "../Common/RadioButton/RadioButton";
import React, {useState} from "react";
import LinkButton from "./Link/Link";
import SearchInput from "../Common/Search/Search";
import TextCheckBox from "./TextCheckBox/TextCheckBox";

const Wallet = () => {
    const [selectedOption1, setSelectedOption1] = useState('All');
    const [searchInputValue, setSearchInputValue] = useState('');
    const [selectedOption2, setSelectedOption2] = useState(false);

    const radioButtonInfo = {
        option_1: [
            {name: "option_1", value: "All"},
            {name: "option_1", value: "Crypto"},
            {name: "option_1", value: "Fiat"},
        ]
    }

    const linkInfo =  [
        {name: "Deposit", src: "/"},
        {name: "Withdraw", src: "/"},
        {name: "Exchange", src: "/pro/exchange"},
    ]

    const toggleSelectedOption2 = () => {
        setSelectedOption2(selected => !selected);
    };

    return (
        <div>
            <Header back text="Wallet" menu />
            <div className="wrap">
                <div className={`${styles.row} ${styles.linkRow}`}>
                    {
                        linkInfo.map(({name, src}, index) => (
                            <LinkButton key={index} title={name} src={src}/>
                        ))
                    }
                </div>
                <div className={styles.row}>
                    {
                        radioButtonInfo.option_1.map(({name, value}) => (
                            <RadioButton key={value} name={name} value={value} selected={selectedOption1}
                                         onSelect={setSelectedOption1} inner/>
                        ))
                    }
                </div>
                <div className={styles.searchRow}>
                    <SearchInput name="wallet_search" value={searchInputValue} onSearch={setSearchInputValue}/>
                    <TextCheckBox name="wallet_hide_zero" onSelect={toggleSelectedOption2} selected={selectedOption2} text="Hide zero balance"/>
                </div>
            </div>
        </div>
    )
}

export default Wallet;