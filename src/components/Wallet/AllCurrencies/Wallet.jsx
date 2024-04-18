import styles from "./Wallet.module.scss";
import Header from "../../Common/Header/Header";
import RadioButton from "../../Common/RadioButton/RadioButton";
import React, {useState, useEffect} from "react";
import LinkButton from "../Common/Link/Link";
import SearchInput from "../../Common/Search/Search";
import TextCheckBox from "../Common/TextCheckBox/TextCheckBox";
import CurrencyBlock from "../Common/CurrencyBlock/CurrencyBlock";
import {setSelectedCurrency} from "../../../store/user-slice";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getCurrencyInfo} from "../../../store/selectors";

const Wallet = () => {
    const [selectedOption1, setSelectedOption1] = useState('All');
    const [searchInputValue, setSearchInputValue] = useState('');
    const [selectedOption2, setSelectedOption2] = useState(false);
    const [filteredArray, setFilteredArray] = useState([]);

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const currencyInfo = useSelector(getCurrencyInfo);

    useEffect(() => {
        setFilteredArray(currencyInfo);
    }, []);

    useEffect(() => {
        if (selectedOption2) {
            setFilteredArray(currencyInfo.filter(el => parseInt(el.balance) !== 0))
        } else {
            setFilteredArray(currencyInfo)
        }
    }, [selectedOption2])

    const radioButtonInfo = {
        option_1: [
            {name: "option_1", value: "All"},
            {name: "option_1", value: "Crypto"},
            {name: "option_1", value: "Fiat"},
        ]
    }

    const linkInfo = [
        {name: "Deposit", src: "/"},
        {name: "Withdraw", src: "/wallet/withdraw"},
        {name: "Exchange", src: "/pro/exchange"},
    ]


    const toggleSelectedOption2 = () => {
        setSelectedOption2(selected => !selected);
    };

    const navigateLink = (currencyName) => {
        let currency = currencyInfo.find((el) => el.name === currencyName);
        dispatch(setSelectedCurrency(currency.name));
        navigate('/wallet/currency');
    }

    return (
        <div>
            <Header back text="Wallet" menu/>
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
                    <TextCheckBox name="wallet_hide_zero" onSelect={toggleSelectedOption2} selected={selectedOption2}
                                  text="Hide zero balance"/>
                </div>
                <div className={styles.currencyWrap}>
                    {
                        filteredArray.map(({name, commercial, warrants, balance, src}, index) => (
                            <CurrencyBlock key={index} name={name} commercial={commercial} warrants={warrants}
                                           balance={balance} src={src} handleClick={() => navigateLink(name)}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Wallet;