import styles from "../Manager.module.scss";
import Header from "../../Common/Header/Header";
import useSubRoute from "../../../hooks/useSubRoute";
import NavLinks from "../../Common/NavLinks/NavLinks";
import ListItem from "../../Common/ListItem/ListItem";
import IconTether from "../../../assets/images/tether.svg";
import IconBitcoin from "../../../assets/images/bitcoin.svg";
import IconEtherium from "../../../assets/images/etherium.svg";
import IconLitecoin from "../../../assets/images/litecoin.svg";
import IconSomecoin from "../../../assets/images/somecoin.svg";
import IconTRX from "../../../assets/images/trx.svg";
import React from "react";

const Fiat = () => {
    let subroute = useSubRoute();

    const cryptoCurrencies = [
        {src: IconTether, name: 'Tether USD', value: '2,655.0498 USDT', value2: '0.00 USD'},
        {src: IconBitcoin, name: 'BTC', value: '0.0000012 BTC', value2: '0.00 USD'},
        {src: IconEtherium, name: 'ETH', value: '5,453.000 ETH', value2: '0.00 USD'},
        {src: IconLitecoin, name: 'LTC', value: '1.0000 LNC', value2: '0.00 USD'},
        {src: IconSomecoin, name: 'BNB', value: '0.000032 BNB', value2: '0.00 USD'},
        {src: IconTRX, name: 'TRX', value: '2,655.0498 TRX', value2: '0.00 USD'},
        {src: IconTether, name: 'Tether USD', value: '2,655.0498 USDT', value2: '0.00 USD'},
        {src: IconBitcoin, name: 'BTC', value: '0.0000012 BTC', value2: '0.00 USD'},
        {src: IconEtherium, name: 'ETH', value: '5,453.000 ETH', value2: '0.00 USD'},
        {src: IconLitecoin, name: 'LTC', value: '1.0000 LNC', value2: '0.00 USD'},
        {src: IconSomecoin, name: 'BNB', value: '0.000032 BNB', value2: '0.00 USD'},
        {src: IconTRX, name: 'TRX', value: '2,655.0498 TRX', value2: '0.00 USD'},

    ]
    return (
        <div>
            <Header back text="Manager" menu/>
            <div className="wrap">
                <NavLinks subroute={subroute} text1="Crypto" link1={'/manager/crypto'} text2="Fiat"
                          link2={'/manager/fiat'}/>
                <div className={styles.innerWrap}>
                    <div className={styles.listWrap}>
                        {
                            cryptoCurrencies.map(({name, value, value2, src}, index) => (
                                <ListItem key={index} name={name} value={value} value2={value2}
                                          src={src} onClick={null}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fiat;