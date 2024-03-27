import styles from "./CurrencyPopUp.module.scss";
import React, {useState} from "react";
import Header from "../Common/Header/Header";
import SearchInput from "../Common/Search/Search";
import RadioButton from "../Common/RadioButton/RadioButton";

const CurrencyPopUp = ({closePopUp, searchInputValue, setSearchInputValue}) => {

    return (
        <div className={`${styles['currency-popup']}`}>
            <div className="resize">
                <Header back text="Exchange" menu close={closePopUp}/>
                <div className="wrap">
                    <SearchInput name="currencypopup_search" value={searchInputValue} onSearch={setSearchInputValue}/>

                </div>
            </div>
        </div>
    )
}

export default CurrencyPopUp;