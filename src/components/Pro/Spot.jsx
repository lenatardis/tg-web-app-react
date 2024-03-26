import styles from "./Pro.module.scss";
import Header from "../Common/Header/Header";
import useSubRoute from "../../hooks/useSubRoute";
import NavLinks from "./NavLinks";
import IconTether from "../../assets/images/tether_min.svg";
import IconSelect from "../../assets/images/select.svg";
import React, {useState} from "react";
import RadioButton from "../Common/RadioButton/RadioButton";
import MarketPrice from "./MarketPrice";
import BtnBlock from "./BtnBlock";
import Balance from "./Balance";
import {useEffect} from "react";
import HistoryPopUp from "./HistoryPopUp";

const Spot = () => {
    let subroute = useSubRoute();
    const [selectedOption1, setSelectedOption1] = useState('Buy');
    const [selectedOption2, setSelectedOption2] = useState('Market');
    const [selectedOption3, setSelectedOption3] = useState('Orders\' history');
    const [historyPopUp, setHistoryPopUp] = useState(false);

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

    const closePopUp = () => {
        setHistoryPopUp(false);
        setSelectedOption3('Orders\' history');
    }

    return (
        <div>
            <Header back text="Exchange" menu/>
            <div className="wrap">
                <NavLinks subroute={subroute}/>
                <div className={`${styles['row']} ${styles['main-row']}`}>
                    <span>
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
                <MarketPrice title={`${selectedOption2} price`}/>
                <div className={styles.row}>
                    <MarketPrice title="Quantity"/>
                    <MarketPrice title="Total"/>
                </div>
                <Balance/>
                <BtnBlock option={selectedOption1}/>
                <div className={`${styles['row']} ${styles['order-row']}`}>
                    {
                        radioButtonInfo.option_3.map(({name, value}) => (
                            <RadioButton key={value} name={name} value={value} selected={selectedOption3}
                                         onSelect={() => handleSelectOption3(value)}/>
                        ))
                    }
                </div>
                {historyPopUp && <HistoryPopUp closePopUp={closePopUp} bottom={historyPopUp}/>}
            </div>
        </div>
    )
}

export default Spot;