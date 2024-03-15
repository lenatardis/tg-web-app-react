import React from 'react';
import styles from "./CVV.module.scss";
import Header from "../Common/Header/Header"
import {useState} from "react";
import RadioButton from "./RadioButton";
import RadioButtonRow from "./RadioButtonRow";
import IconBitcoin from "../../assets/images/bitcoin.svg";
import SearchInput from "./Search";
import SearchIcon from "../../assets/images/search.svg";
import {DateField} from '@mui/x-date-pickers/DateField';
import dayjs, {Dayjs} from 'dayjs';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';

const CVV = () => {
    const [selectedOption1, setSelectedOption1] = useState('Orders');
    const [selectedOption2, setSelectedOption2] = useState('Last 7d');
    const [selectedOption3, setSelectedOption3] = useState('');
    const [selectedOption4, setSelectedOption4] = useState('BTC/USDT');
    const [searchInputValue, setSearchInputValue] = useState('');

    const [value, setValue] = React.useState(dayjs('2024/01/21'));
    const [value2, setValue2] = React.useState(dayjs('2024/01/28'));

    const radioButtonInfo = {
        option_1: [
            {name: "option_1", value: "Orders"},
            {name: "option_1", value: "Transactions"},
        ],
        option_2: [
            {name: "option_2", value: "24h"},
            {name: "option_2", value: "Last 7d"},
            {name: "option_2", value: "Last 30d"},
        ],
        option_3: [
            {name: "option_3", value: "Crypto"},
            {name: "option_3", value: "Fiat"}
        ],
        option_4: [
            {name: "option_4", value: "BTC/USDT"},
            {name: "option_4", value: "BTC/ETH"},
            {name: "option_4", value: "BTC/LTC"},
            {name: "option_4", value: "BTC/BNB"},
            {name: "option_4", value: "BTC/SOL"},
            {name: "option_4", value: "BTC/XLM"},
        ]
    };

    return (
        <div>
            <Header back text="History CVV"/>
            <div className={`${styles['cvv-wrap']} wrap`}>
                <h2>Type</h2>
                <div className={styles.row}>
                    {
                        radioButtonInfo.option_1.map(({name, value}) => (
                            <RadioButton key={value} name={name} value={value} selected={selectedOption1}
                                         onSelect={setSelectedOption1}/>
                        ))
                    }
                </div>
                <h2>Period</h2>
                <div className={`${styles.row} ${styles.row2}`}>
                    {
                        radioButtonInfo.option_2.map(({name, value}) => (
                            <RadioButton key={value} name={name} value={value} selected={selectedOption2}
                                         onSelect={setSelectedOption2}/>
                        ))
                    }
                </div>
                <div className={`${styles['datefield-row']}`}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateField', 'DateField']}>
                            <DateField
                                label="Controlled field"
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                                format="YYYY/MM/DD"
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateField', 'DateField']}>
                            <DateField
                                label="Controlled field"
                                value={value2}
                                onChange={(newValue) => setValue2(newValue)}
                                format="YYYY/MM/DD"
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
                <h2>Currency pair</h2>
                <div className={`${styles.row} ${styles.row3}`}>
                    <SearchInput name="historyCVV_search" value={searchInputValue} onSearch={setSearchInputValue}
                                 src={SearchIcon}/>
                    {
                        radioButtonInfo.option_3.map(({name, value}) => (
                            <RadioButton key={value} name={name} value={value} selected={selectedOption3}
                                         onSelect={setSelectedOption3}/>
                        ))
                    }
                </div>
                {
                    radioButtonInfo.option_4.map(({name, value}) => (
                        <RadioButtonRow key={value} name={name} value={value} selected={selectedOption4}
                                        onSelect={setSelectedOption4} src={IconBitcoin}/>
                    ))
                }
            </div>
        </div>
    )
}

export default CVV;