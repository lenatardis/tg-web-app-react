import styles from "./Withdraw.module.scss";
import Header from "../../Common/Header/Header";
import ListItem from "../../Common/ListItem/ListItem";
import IconTether from "../../../assets/images/tether.svg";
import IconBitcoin from "../../../assets/images/bitcoin.svg";
import IconEtherium from "../../../assets/images/etherium.svg";
import IconLitecoin from "../../../assets/images/litecoin.svg";
import IconSomecoin from "../../../assets/images/somecoin.svg";
import IconTRX from "../../../assets/images/trx.svg";
import SearchInput from "../../Common/Search/Search";
import {useState} from "react";
const Withdraw = () => {

    const [searchInputValue, setSearchInputValue] = useState('');

    const cryptoCurrencies = [
        {src: IconTether, name: 'Tether USDT', value: '2,655.0498 USDT', value2: '0.00 USD'},
        {src: IconBitcoin, name: 'BTC', value: '0.0000012 BTC', value2: '0.00 USD'},
        {src: IconEtherium, name: 'ETH', value: '5,453.000 ETH', value2: '0.00 USD'},
        {src: IconLitecoin, name: 'LTC', value: '1.0000 LNC', value2: '0.00 USD'},
        {src: IconSomecoin, name: 'BNB', value: '0.000032 BNB', value2: '0.00 USD'},
        {src: IconTRX, name: 'TRX', value: '2,655.0498 TRX', value2: '0.00 USD'},
        {src: IconTether, name: 'Tether USDT', value: '2,655.0498 USDT', value2: '0.00 USD'},
        {src: IconBitcoin, name: 'BTC', value: '0.0000012 BTC', value2: '0.00 USD'},
        {src: IconEtherium, name: 'ETH', value: '5,453.000 ETH', value2: '0.00 USD'},
        {src: IconLitecoin, name: 'LTC', value: '1.0000 LNC', value2: '0.00 USD'},
        {src: IconSomecoin, name: 'BNB', value: '0.000032 BNB', value2: '0.00 USD'},
        {src: IconTRX, name: 'TRX', value: '2,655.0498 TRX', value2: '0.00 USD'},

    ]
    return (
        <div>
            <Header back text="Withdraw" menu/>
            <div className="wrap">
                <div className={styles.innerWrap}>
                    <SearchInput name="withdraw_search" value={searchInputValue} onSearch={setSearchInputValue} grey/>
                    <h2>Select asset to withdraw</h2>
                    <div className={styles.listWrap}>
                        {
                            cryptoCurrencies.map(({name, value, value2, src}, index) => (
                                <ListItem key={index} name={name} value={value} value2={value2}
                                          src={src}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Withdraw;