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
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCurrencyToWithdraw, setCurrencyToWithdrawNetwork} from "../../../store/user-slice";
import {useNavigate} from "react-router-dom";
import PopUp from "./Popup";
import {getCurrencyToWithdrawInfo} from "../../../store/selectors";

const Withdraw = () => {
    const [searchInputValue, setSearchInputValue] = useState('');
    const [networkPopUp, setNetworkPopUp] = useState(false);
    const [networks, setNetworks] = useState([]);
    const [selectedNetwork, setSelectedNetwork] = useState('');
    const [shouldNavigate, setShouldNavigate] = useState(false);

    const cryptoInfo = useSelector(getCurrencyToWithdrawInfo);

    let dispatch = useDispatch();
    let navigate = useNavigate();

    const cryptoCurrencies = [
        {src: IconTether, name: 'Tether USD', abbr: 'USDT', value: '2,655.0498 USDT', value2: '0.00 USD'},
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

    const handleClick = (name, abbr) => {
        dispatch(setCurrencyToWithdraw(abbr ?? name));
        setNetworkPopUp(true);
    }

    const closeNetworkPopUp = () => {
        setNetworkPopUp(false);
    }

    useEffect(() => {
        if (networkPopUp) {
            document.body.classList.add('noscroll');
        } else {
            document.body.classList.remove('noscroll');
        }

        return () => {
            document.body.classList.remove('noscroll');
        };
    }, [networkPopUp]);

    const handleNetworkChange = (network) => {
        setSelectedNetwork(network);
        dispatch(setCurrencyToWithdrawNetwork(network));
        setShouldNavigate(true);
    }

    useEffect(() => {
        let timer;
        if (shouldNavigate) {
            timer = setTimeout(() => {
                navigate('/wallet/withdraw/currency');
                setShouldNavigate(false);
            }, 1000);
        }

        return () => clearTimeout(timer);
    }, [shouldNavigate]);

    return (
        <div>
            <Header back text="Withdraw" menu/>
            <div className="wrap">
                <div className={styles.innerWrap}>
                    <SearchInput name="withdraw_search" value={searchInputValue} onSearch={setSearchInputValue}
                                 placeholder="Search assets" grey/>
                    <h2>Select asset to withdraw</h2>
                    <div className={styles.listWrap}>
                        {
                            cryptoCurrencies.map(({name, value, value2, src, abbr}, index) => (
                                <ListItem key={index} name={name} value={value} value2={value2}
                                          src={src} abbr={abbr} handleClick={() => handleClick(name, abbr)}/>
                            ))
                        }
                    </div>
                </div>
                <PopUp closePopUp={closeNetworkPopUp} isVisible={networkPopUp} selected={selectedNetwork}
                       onSelect={handleNetworkChange}/>
            </div>
        </div>
    )
}

export default Withdraw;