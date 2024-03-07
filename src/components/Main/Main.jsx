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
import TotalBlock from "./TotalBlock";
import CurrencyList from "./CurrencyList";

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
            <TotalBlock currency={currency} total={total} sign={sign}/>
            <MainLinks/>
            <CurrencyList cryptoCurrencies={cryptoCurrencies}/>
        </div>
    )
}
export default Main;