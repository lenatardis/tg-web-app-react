import styles from "../Pro.module.scss";
import Header from "../../Common/Header/Header";
import useSubRoute from "../../../hooks/useSubRoute";
import NavLinks from "../../Common/NavLinks/NavLinks";
import IconTether from "../../../assets/images/tether_min.svg";
import IconSelect from "../../../assets/images/select.svg";
import React, {useEffect, useState} from "react";
import RadioButton from "../../Common/RadioButton/RadioButton";
import MarketPrice from "./MarketPrice";
import BtnBlock from "./BtnBlock";
import HistoryPopUp from "./HistoryPopUp/HistoryPopUp";
import CurrencyPopUp from "./CurrencyPopUp/CurrencyPopUp";
import CustomRange from "./CustomRange/CustomRange";

const Spot = () => {
    let subroute = useSubRoute();
    const [selectedOption1, setSelectedOption1] = useState('Buy');
    const [selectedOption2, setSelectedOption2] = useState('Market');
    const [selectedOption3, setSelectedOption3] = useState('Orders\' history');
    const [historyPopUp, setHistoryPopUp] = useState(false);
    const [currencyPopUp, setCurrencyPopUp] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState('');
    const [selectedCurrency, setSelectedCurrency] = useState('FIAT');
    const [checked, setChecked] = useState(false);
    const [percent, setPercent] = useState(0);
    const [quantity, setQuantity] = useState(0.9154);
    const [total, setTotal] = useState(0);
    let balance = '2,655.0498';
    let price= '0.9154';


    useEffect(() => {
        if (historyPopUp) {
            document.body.classList.add('noscroll');
        } else {
            document.body.classList.remove('noscroll');
        }

        return () => {
            document.body.classList.remove('noscroll');
        };
    }, [historyPopUp]);

    const radioButtonInfo = {
        option_1: [
            {name: "option1", value: "Buy"},
            {name: "option1", value: "Sell"},
        ],
        option_2: [
            {name: "option2", value: "Market"},
            {name: "option2", value: "Limit"}
        ],
        option_3: [
            {name: "option3", value: "Open orders"},
            {name: "option3", value: "Orders\' history"}
        ]
    };

    const handleSelectOption3 = (value) => {
        setSelectedOption3(value);
        setHistoryPopUp(historyPopUp => !historyPopUp);
    }

    const closeHistoryPopUp = () => {
        setHistoryPopUp(false);
        setSelectedOption3('Orders\' history');
    }

    const openCurrencyPopUp = () => {
        setCurrencyPopUp(true);
    }

    const closeCurrencyPopUp = () => {
        setCurrencyPopUp(false);
    }

    const handleCheckBox = () => {
        setChecked(checked => !checked);
    }

    const updatePercent = (value) => {
        setPercent(value.toFixed(0));
    }

    const processNumericValue = (displayValue) => {
        const inputString = String(displayValue);
        const numericValue = parseFloat(inputString.replace(/,/g, ''));
        return numericValue;
    }

    let processedBalance = processNumericValue(balance);

    useEffect(() => {
        setQuantity((parseFloat(processedBalance)*(parseInt(percent)/100)).toFixed(4));
    }, [percent]);

    useEffect(() => {
       setTotal((parseFloat(quantity)* parseFloat(price)).toFixed(2));
    }, [quantity]);

    return (
        <div>
            <Header back text="Exchange" menu/>
            <div className="wrap">
                <NavLinks subroute={subroute} text1="Exchange" link1={'/pro/exchange'} text2="Spot"
                          link2={'/pro/spot'}/>
                <div className={`${styles['row']} ${styles['main-row']}`}>
                    <span onClick={openCurrencyPopUp}>
                        <img src={IconTether} alt=""/>
                        <span>USDT/EUR</span>
                        <span>344256.35</span>
                        <img src={IconSelect} alt=""/>
                    </span>
                    {
                        radioButtonInfo.option_1.map(({name, value}) => (
                            <RadioButton key={value} name={name} value={value} selected={selectedOption1}
                                         onSelect={setSelectedOption1}/>
                        ))
                    }
                </div>
                <div className={`${styles['row']} ${styles['ml-row']}`}>
                    {
                        radioButtonInfo.option_2.map(({name, value}) => (
                            <RadioButton key={value} name={name} value={value} selected={selectedOption2}
                                         onSelect={setSelectedOption2}/>
                        ))
                    }
                </div>
                <MarketPrice title={`${selectedOption2} price`} currency="EUR" price={price}/>
                <div className={`${styles.row} ${styles.totalRow}`}>
                    <MarketPrice title="Quantity" currency="USDT" quantity={quantity}/>
                    <MarketPrice title="Total" currency="EUR" total={total}/>
                </div>
                <CustomRange updateRangeValue={(value) => updatePercent(value)}/>
                <div className={styles.balance}>
                    <span>Available balance</span>
                    <span>{balance} USDT</span>
                </div>
                <BtnBlock option={selectedOption1}/>
                <div className={`${styles['row']} ${styles['order-row']}`}>
                    {
                        radioButtonInfo.option_3.map(({name, value}) => (
                            <RadioButton key={value} name={name} value={value} selected={selectedOption3}
                                         onSelect={() => handleSelectOption3(value)}/>
                        ))
                    }
                </div>
                <HistoryPopUp closePopUp={closeHistoryPopUp} isVisible={historyPopUp}/>
                <CurrencyPopUp closePopUp={closeCurrencyPopUp} isVisible={currencyPopUp}
                               searchInputValue={searchInputValue}
                               setSearchInputValue={setSearchInputValue}
                               selectedCurrency={selectedCurrency}
                               setSelectedCurrency={setSelectedCurrency}
                               checked={checked} setChecked={handleCheckBox}
                />
            </div>
        </div>
    )
}

export default Spot;