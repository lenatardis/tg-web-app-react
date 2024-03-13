import styles from "./CVV.module.scss";
import Header from "../Common/Header/Header"
import {useState} from "react";
import RadioButton from "./RadioButton";
import RadioButtonRow from "./RadioButtonRow";
import IconBitcoin from "../../assets/images/bitcoin.svg";

const CVV = () => {
    const [selectedOption1, setSelectedOption1] = useState('orders');
    const [selectedOption2, setSelectedOption2] = useState('BTC/USDT');

    const handleOptionChange1 = (option) => {
        setSelectedOption1(option);
    };

    const handleOptionChange2 = (option) => {
        setSelectedOption2(option);
    };

    return (
        <div>
            <Header back text="CVV"/>
            <div className="wrap">
                <div className={styles.row}>
                    <RadioButton name="option_1" value="orders" text="Orders" onSelect={handleOptionChange1} selected={selectedOption1}/>
                    <RadioButton name="option_1" value="transactions" text="Transactions" onSelect={handleOptionChange1} selected={selectedOption1}/>
                </div>
                <RadioButtonRow name="option_2" value="BTC/USDT" text="BTC/USDT" onSelect={handleOptionChange2} selected={selectedOption2} src={IconBitcoin}/>
                <RadioButtonRow name="option_2" value="BTC/USDC" text="BTC/USDC" onSelect={handleOptionChange2} selected={selectedOption2} src={IconBitcoin}/>
                <RadioButtonRow name="option_2" value="BTC/USDA" text="BTC/USDA" onSelect={handleOptionChange2} selected={selectedOption2} src={IconBitcoin}/>
            </div>
        </div>
    )
}

export default CVV;