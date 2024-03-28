import styles from "./CurrencyPopUp.module.scss";
import React from "react";
import Header from "../../../Common/Header/Header";
import SearchInput from "../../../Common/Search/Search";
import RadioButton from "../../../Common/RadioButton/RadioButton";
import CheckBox from "./Checkbox/Checkbox";
import ListItem from "./ListItem";

const CurrencyPopUp = ({
                           closePopUp,
                           isVisible,
                           searchInputValue,
                           setSearchInputValue,
                           selectedCurrency,
                           setSelectedCurrency,
                           checked,
                           setChecked
                       }) => {

    const buttonArray = ['BTC', 'ETH', 'FIAT', 'LTK', 'BNB', 'BSV', 'DOGE', 'ETC', 'SOL', 'ENJ'];

    const listInfo = {
        items: [
            {name: "USDT/USD", value: "42.200 USDT "},
            {name: "USDT/USD", value: "0.0021647 BTC"},
            {name: "USDT/USD", value: "0.005956 BTC"},
            {name: "USDT/USD", value: "0.006618 BTC"},
            {name: "USDT/USD", value: "0.0046746 BTC"},
            {name: "USDT/USD", value: "0.005956 BTC"}
        ]
    }

    return (
        <div className={`${styles['currency-popup']} ${isVisible ? styles['popup-show'] : ''}`}>
            <div className="resize">
                <Header back text="Exchange" menu close={closePopUp}/>
                <div className="wrap">
                    <SearchInput name="currencypopup_search" value={searchInputValue} onSearch={setSearchInputValue}/>
                    <div className={`${styles['currency-popup__button-row']}`}>
                        <CheckBox name="currencypopup_checkbox" value={checked} setChecked={setChecked}/>
                        {
                            buttonArray.map((el, index) => (
                                <RadioButton key={index} name="currencyPopupCurrency" value={el}
                                             selected={selectedCurrency}
                                             onSelect={setSelectedCurrency}/>
                            ))
                        }
                    </div>
                    <div className={`${styles['currency-popup__list-wrap']}`}>
                        {
                            listInfo.items.map(({name, value}, index) => (
                                <ListItem key={index} text1={name} text2={value}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrencyPopUp;