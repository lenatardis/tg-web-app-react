import styles from "../../PopUp.module.scss";
import ClosePopUp from "../../../Common/ClosePopUp/ClosePopUp";
import React, {useEffect, useState} from "react";
import RadioButton from "../../../Common/RadioButton/RadioButton";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, {Dayjs} from 'dayjs';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {DateField} from "@mui/x-date-pickers/DateField";
import RadioButtonRow from "../../../Common/RadioButtonRow/RadioButtonRow";
import IconBitcoin from "../../../../assets/images/bitcoin.svg";
import IconTether from "../../../../assets/images/tether.svg";
import IconEtherium from "../../../../assets/images/etherium.svg";
import IconLitecoin from "../../../../assets/images/litecoin.svg";
import IconSomecoin from "../../../../assets/images/somecoin.svg";
import Button from "../../../Common/Button";


const PopUp = ({isVisible, closePopUp}) => {

    const [selectedOption1, setSelectedOption1] = useState('Transactions');
    const [selectedOption2, setSelectedOption2] = useState('All');
    const [selectedOption3, setSelectedOption3] = useState('24h');
    const [selectedOption4, setSelectedOption4] = useState('All');
    const [selectedOption5, setSelectedOption5] = useState('');

    const [value, setValue] = useState(dayjs().subtract(1, 'day'));
    const [value2, setValue2] = useState(dayjs());

    const radioButtonInfo = {
        option_1: [
            {name: "option_1", value: "All"},
            {name: "option_1", value: "Orders"},
            {name: "option_1", value: "Transactions"},
        ],
        option_2: [
            {name: "option_2", value: "All"},
            {name: "option_2", value: "Send"},
            {name: "option_2", value: "Receive"},
            {name: "option_2", value: "Exchange"}
        ],
        option_3: [
            {name: "option_3", value: "24h"},
            {name: "option_3", value: "Last 7d"}
        ],
        option_4: [
            {name: "option_4", value: "All"},
            {name: "option_4", value: "Crypto"},
            {name: "option_4", value: "Fiat"}
        ],
        option_5: [
            {name: "option_5", value: "ETH", src: IconEtherium},
            {name: "option_5", value: "LTC", src: IconLitecoin},
            {name: "option_5", value: "USDT", src: IconTether},
            {name: "option_5", value: "BTC", src: IconBitcoin},
            {name: "option_5", value: "BNB", src: IconSomecoin},
            {name: "option_5", value: "ENJ", src: IconSomecoin}
        ]
    };

    useEffect(() => {
        const calculateStartDate = () => {
            switch (selectedOption3) {
                case '24h':
                    return dayjs().subtract(1, 'day');
                case 'Last 7d':
                    return dayjs().subtract(7, 'day');
                default:
                    return dayjs();
            }
        };
        setValue(calculateStartDate());
        setValue2(dayjs());
    }, [selectedOption3]);

    return (
        <div className={`${styles.popup} ${isVisible ? styles['popup-show'] : ''}`}>
            <div className="resize">
                <div className="wrap">
                    <ClosePopUp close={closePopUp}/>
                    <div className={styles.mainRow}>
                        {
                            radioButtonInfo.option_1.map(({name, value}) => (
                                <RadioButton key={value} name={name} value={value} selected={selectedOption1}
                                             onSelect={setSelectedOption1}/>
                            ))
                        }
                    </div>
                    <h2>Type</h2>
                    <div className={styles.row}>
                        {
                            radioButtonInfo.option_2.map(({name, value}) => (
                                <RadioButton key={value} name={name} value={value} selected={selectedOption2}
                                             onSelect={setSelectedOption2}/>
                            ))
                        }
                    </div>
                    <h2>Period</h2>
                    <div className={styles.row2}>
                        {
                            radioButtonInfo.option_3.map(({name, value}) => (
                                <RadioButton key={value} name={name} value={value} selected={selectedOption3}
                                             onSelect={setSelectedOption3}/>
                            ))
                        }
                    </div>
                    <div className={`datefield-row ${styles.row}`}>
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
                    <h2>Currency</h2>
                    <div className={styles.row}>
                        {
                            radioButtonInfo.option_4.map(({name, value}) => (
                                <RadioButton key={value} name={name} value={value} selected={selectedOption4}
                                             onSelect={setSelectedOption4}/>
                            ))
                        }
                    </div>
                    {
                        radioButtonInfo.option_5.map(({name, value, src}) => (
                            <RadioButtonRow key={value} name={name} value={value} selected={selectedOption5}
                                            onSelect={setSelectedOption5} src={src}/>
                        ))
                    }
                    <div className={styles.btnRow}>
                        <Button text="Done" handleClick={null} className={styles.btn}/>
                        <Button text="Get CVV" handleClick={null} className={styles.darkBtn}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUp;