import Header from "../../Common/Header/Header";
import styles from "./SelectedCurrency.module.scss";
import {getCurrencyInfo, getSelectedCurrency} from "../../../store/selectors";
import {useSelector} from "react-redux";
import CurrencyBlock from "../Common/CurrencyBlock/CurrencyBlock";
import IconArrowUp from "../../../assets/images/arr_up.svg";
import IconArrowDown from "../../../assets/images/arr_down.svg";
import IconRefresh from "../../../assets/images/refresh.svg";
import LinkButton from "../Common/Link/Link";
import RadioButton from "../../Common/RadioButton/RadioButton";
import Item from "../Item/Item.jsx";
import React, {useState} from "react";

const SelectedCurrencyWallet = () => {

    const [selectedOption1, setSelectedOption1] = useState('All');

    let selectedCurrency = useSelector(getSelectedCurrency);

    let currencyInfo = useSelector(getCurrencyInfo);

    let selectedCurrencyInfo = currencyInfo.find((el) => el.name === selectedCurrency);

    let {name, commercial, warrants, balance, src} = selectedCurrencyInfo;


    const linkInfo = [
        {name: "Deposit", src: "/", img: IconArrowUp},
        {name: "Withdraw", src: "/", img: IconArrowDown},
        {name: "Exchange", src: "/pro/exchange", img: IconRefresh},
    ]

    return (
        <div>
            <Header back text="Wallet" menu/>
            <div className="wrap">
                <CurrencyBlock name={name} commercial={commercial} warrants={warrants} balance={balance} src={src}
                               handleClick={null} selected deposit/>
                <div className={styles.row}>
                    {
                        linkInfo.map(({name, src, img}, index) => (
                            <LinkButton key={index} title={name} src={src} img={img}/>
                        ))
                    }
                </div>
                <div className={styles.row}>
                    <RadioButton name="selected_currency_wallet" value="TRC20" onSelect={setSelectedOption1} selected={selectedOption1} inner left/>
                    <RadioButton name="selected_currency_wallet" value="ERC20" onSelect={setSelectedOption1} selected={selectedOption1} inner left/>
                </div>
                <Item/>
            </div>
        </div>
    )
}

export default SelectedCurrencyWallet;