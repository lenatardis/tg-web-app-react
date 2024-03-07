import styles from "./Main.module.scss";
import {useSelector} from "react-redux";
import Header from "./Header";
import {getUser} from "../../store/selectors";
import IconTether from "../../assets/images/tether.svg";
import IconBitcoin from "../../assets/images/bitcoin.svg";
import IconEtherium from "../../assets/images/etherium.svg";
import IconLitecoin from "../../assets/images/litecoin.svg";
import IconSomecoin from "../../assets/images/somecoin.svg";
import IconLoader from "../../assets/images/loading.svg";

import {Link} from "react-router-dom";
import MainLinks from "./MainLinks";

const Main = () => {
    const {currency, total, sign} = useSelector(getUser)[0];

    const cryptoCurrencies = [
        {icon: IconTether, name: 'USDT', value: '2878778.85', value2: ''},
        {icon: IconBitcoin, name: 'BTC', value: '39945.3', value2: '45,423.00$'},
        {icon: IconEtherium, name: 'ETH', value: ' 2222.08', value2: '2,453.41$'},
        {icon: IconLitecoin, name: 'LTC', value: '65.76', value2: '69.27$'},
        {icon: IconSomecoin, name: 'BNB', value: '319.84', value2: '319.8920$'},
        {icon: IconTether, name: 'USDT', value: '2878778.85', value2: ''},
        {icon: IconBitcoin, name: 'BTC', value: '39945.3', value2: '45,423.00$'},
        {icon: IconEtherium, name: 'ETH', value: ' 2222.08', value2: '2,453.41$'},
        {icon: IconLitecoin, name: 'LTC', value: '65.76', value2: '69.27$'},
        {icon: IconSomecoin, name: 'BNB', value: '319.84', value2: '319.8920$'}
    ]

    return (
        <div className={styles.main}>
            <Header back text="Main" qr/>
            <div className={`${styles['total-block']} wrap`}>
                <p>Total amount in wallets</p>
                <div className={`${styles['currency-block']}`}>
                    <span className={styles.total}>{sign}{' '}{total}</span>
                    <span className={styles.currency}>{currency.toUpperCase()}</span>
                </div>
            </div>
            <MainLinks/>
            <div className={`${styles['currency-list']} wrap`}>
                {cryptoCurrencies && (
                    cryptoCurrencies.map((item, index) =>
                        <div key={index}
                             className={`${styles['currency-list__item']}`}>
                            <div className={`${styles['title-block']}`}>
                                <img className={styles.image} src={item.icon} alt="{item.name}"/>
                                <div>
                                    <p>{item.name}</p>
                                    {index !== 0 && <p className={styles.addition}>USDT</p>}
                                </div>
                                {index === 0 && <img className={styles.loader} src={IconLoader} alt="loading"/>}
                            </div>
                            <div className={`${styles['value-block']}`}>
                                <div>
                                    <p>{item.value}</p>
                                    {item.value2 && (
                                        <p className={styles.addition}>{item.value2}</p>
                                    )}
                                </div>
                                <span className={styles.fluctuation}>+0,73%</span>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}
export default Main;