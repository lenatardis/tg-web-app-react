import styles from "./CurrencyPopUp.module.scss";
import React from "react";
import Header from "../Common/Header/Header";
import SearchInput from "../Common/Search/Search";
import RadioButton from "../Common/RadioButton/RadioButton";
import CheckBox from "./Checkbox";

const CurrencyPopUp = ({
                           closePopUp,
                           searchInputValue,
                           setSearchInputValue,
                           selectedCurrency,
                           setSelectedCurrency,
                           checked,
                           setChecked
                       }) => {

    const buttonArray = ['BTC', 'ETH', 'FIAT', 'LTK', 'BNB'];

    return (
        <div className={`${styles['currency-popup']}`}>
            <div className="resize">
                <Header back text="Exchange" menu close={closePopUp}/>
                <div className="wrap">
                    <SearchInput name="currencypopup_search" value={searchInputValue} onSearch={setSearchInputValue}/>
                    <div className={`${styles['currency-popup__button-row']}`}>
                        <CheckBox name="currencypopup_checkbox" value={checked} setChecked={setChecked}/>
                        {
                            buttonArray.map((el, index) => (
                                <RadioButton key={el} name="currencyPopupCurrency" value={el}
                                             selected={selectedCurrency}
                                             onSelect={setSelectedCurrency}/>
                            ))
                        }
                    </div>
                    {checked && <p>Checked</p>}
                </div>
            </div>
        </div>
    )
}

export default CurrencyPopUp;