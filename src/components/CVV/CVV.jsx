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
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const CVV = () => {
    const [selectedOption1, setSelectedOption1] = useState('orders');
    const [selectedOption2, setSelectedOption2] = useState('Last 7d');
    const [selectedOption3, setSelectedOption3] = useState('');
    const [selectedOption4, setSelectedOption4] = useState('BTC/USDT');
    const [searchInputValue, setSearchInputValue] = useState('');

    const [value, setValue] = React.useState(dayjs('2024/01/21'));
    const [value2, setValue2] = React.useState(dayjs('2024/01/28'));

    const handleOptionChange1 = (option) => {
        setSelectedOption1(option);
    };

    const handleOptionChange2 = (option) => {
        setSelectedOption2(option);
    };

    const handleOptionChange3 = (option) => {
        setSelectedOption3(option);
    };

    const handleOptionChange4 = (option) => {
        setSelectedOption4(option);
    };

    const handleSearchInputChange = (text) => {
        setSearchInputValue(text);
    };


    return (
        <div>
            <Header back text="History CVV"/>
            <div className={`${styles['cvv-wrap']} wrap`}>
                <h2>Type</h2>
                <div className={styles.row}>
                    <RadioButton name="option_1" value="orders" text="Orders" onSelect={handleOptionChange1}
                                 selected={selectedOption1}/>
                    <RadioButton name="option_1" value="transactions" text="Transactions" onSelect={handleOptionChange1}
                                 selected={selectedOption1}/>
                </div>
                <h2>Period</h2>
                <div className={`${styles.row} ${styles.row2}`}>
                    <RadioButton name="option_2" value="24h" text="24h" onSelect={handleOptionChange2}
                                 selected={selectedOption2}/>
                    <RadioButton name="option_2" value="Last 7d" text="Last 7d" onSelect={handleOptionChange2}
                                 selected={selectedOption2}/>
                    <RadioButton name="option_2" value="Last 30d" text="Last 30d" onSelect={handleOptionChange2}
                                 selected={selectedOption2}/>
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
                    <SearchInput name="historyCVV_search" value={searchInputValue} onSearch={setSearchInputValue} src={SearchIcon}/>
                    <RadioButton name="option_3" value="Crypto" text="Crypto" onSelect={handleOptionChange3}
                                 selected={selectedOption3}/>
                    <RadioButton name="option_3" value="Fiat" text="Fiat" onSelect={handleOptionChange3}
                                 selected={selectedOption3}/>
                </div>
                <RadioButtonRow name="option_4" value="BTC/USDT" text="BTC/USDT" onSelect={handleOptionChange4}
                                selected={selectedOption4} src={IconBitcoin}/>
                <RadioButtonRow name="option_4" value="BTC/USDC" text="BTC/USDC" onSelect={handleOptionChange4}
                                selected={selectedOption4} src={IconBitcoin}/>
                <RadioButtonRow name="option_4" value="BTC/USDA" text="BTC/USDA" onSelect={handleOptionChange4}
                                selected={selectedOption4} src={IconBitcoin}/>
                <RadioButtonRow name="option_4" value="BTC/USDT" text="BTC/USDT" onSelect={handleOptionChange4}
                                selected={selectedOption4} src={IconBitcoin}/>
                <RadioButtonRow name="option_4" value="BTC/USDC" text="BTC/USDC" onSelect={handleOptionChange4}
                                selected={selectedOption4} src={IconBitcoin}/>
                <RadioButtonRow name="option_4" value="BTC/USDA" text="BTC/USDA" onSelect={handleOptionChange4}
                                selected={selectedOption4} src={IconBitcoin}/>
            </div>
        </div>
    )
}

export default CVV;