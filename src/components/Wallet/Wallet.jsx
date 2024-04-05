import styles from "./Wallet.module.scss";
import Header from "../Common/Header/Header";
import RadioButton from "../Common/RadioButton/RadioButton";
import React, {useState} from "react";
import LinkButton from "./Link/Link";
import SearchInput from "../Common/Search/Search";
import TextCheckBox from "./TextCheckBox/TextCheckBox";
import CurrencyBlock from "./CurrencyBlock/CurrencyBlock";
import IconTether from "../../assets/images/tether.svg";
import IconBitcoin from "../../assets/images/bitcoin.svg";
import IconLitecoin from "../../assets/images/litecoin.svg";
import IconEtherium from "../../assets/images/etherium.svg";
import IconSomecoin from "../../assets/images/somecoin.svg";

const Wallet = () => {
    const [selectedOption1, setSelectedOption1] = useState('All');
    const [searchInputValue, setSearchInputValue] = useState('');
    const [selectedOption2, setSelectedOption2] = useState(false);
   /* const [currencyArray, setCurrencyArray] = currencyInfo;*/

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

    const currencyInfo =  [
        {name: "USDT", commercial: 0, warrants: 0, balance: 0, src: IconTether},
        {name: "BTC", commercial: 0, warrants: 0, balance: 1, src: IconBitcoin},
        {name: "LTC", commercial: 0, warrants: 0, balance: 0, src: IconLitecoin},
        {name: "ETH", commercial: 0, warrants: 0, balance: 3, src: IconEtherium},
        {name: "BNB", commercial: 0, warrants: 0, balance: 1, src: IconSomecoin}
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
                <div className={styles.currencyWrap}>
                    {
                        currencyInfo.map(({name, commercial,warrants, balance, src}, index) => (
                            <CurrencyBlock key={index} name={name} commercial={commercial} warrants={warrants} balance={balance} src={src}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Wallet;