import Header from "../../Common/Header/Header";
import styles from "./SelectedCurrency.module.scss";
import {getSelectedCurrencyInfo, getNetworks} from "../../../store/selectors";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import CurrencyBlock from "../Common/CurrencyBlock/CurrencyBlock";
import IconArrowUp from "../../../assets/images/arr_up.svg";
import IconArrowDown from "../../../assets/images/arr_down.svg";
import IconRefresh from "../../../assets/images/refresh.svg";
import LinkButton from "../Common/Link/Link";
import RadioButton from "../../Common/RadioButton/RadioButton";
import Item from "../Item/Item.jsx";
import React, {useEffect, useState} from "react";
import NetworkPopUp from "./NetworkPopup/Popup";
import {setNetwork} from "../../../store/user-slice";
import SettingsPopUp from "../SettingPopup/Popup";

const SelectedCurrencyWallet = () => {

    const [selectedOption1, setSelectedOption1] = useState('All');
    const [initialItems, setInitialItems] = useState([]);
    const [items, setItems] = useState([]);
    const [deposit, setDeposit] = useState(true);
    const [networkPopUp, setNetworkPopUp] = useState(false);
    const [settingsPopUp, setSettingsPopUp] = useState(false);
    const [selectedItem, setSelectedItem] = useState({name:'', address:''});
    const [selectedNetwork, setSelectedNetwork] = useState('');
    const [shouldNavigate, setShouldNavigate] = useState(false);

    let selectedCurrencyInfo = useSelector(getSelectedCurrencyInfo);
    console.log(selectedCurrencyInfo);

    let {name, commercial, warrants, balance, src, networks} = selectedCurrencyInfo;

    let networkInfo = useSelector(getNetworks);

    let dispatch = useDispatch();
    let navigate = useNavigate();

    const linkInfo = [
        {name: "Deposit", src: "/", img: IconArrowUp},
        {name: "Withdraw", src: "/", img: IconArrowDown},
        {name: "Exchange", src: "/pro/exchange", img: IconRefresh},
    ]

    useEffect(() => {
        let initialItems;
        if (selectedCurrencyInfo && networks) {
            initialItems = networks.flatMap(network =>
                networkInfo[network].map(wallet => ({
                    ...wallet,
                    network
                }))
            );
            setInitialItems(initialItems);
            setItems(initialItems);
        }
    }, [networkInfo]);

    useEffect(() => {
        if (selectedCurrencyInfo) {
            if (selectedOption1 === 'All') {
                setItems(initialItems);
            } else {
                setItems(initialItems.filter(el => el.network === selectedOption1));
            }
        }
    }, [selectedOption1, initialItems]);

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

    useEffect(() => {
        let timer;
        if (shouldNavigate) {
            timer = setTimeout(() => {
                navigate('/wallet/managerdeposit');
                setShouldNavigate(false);
            }, 1000);
        }

        return () => clearTimeout(timer);
    }, [shouldNavigate]);


    const closeNetworkPopUp = () => {
        setNetworkPopUp(false);
    }

    const openNetworkPopUp = () => {
        setNetworkPopUp(true);
    }

    const handleNetworkChange = (network) => {
        setSelectedNetwork(network);
        dispatch(setNetwork(network));
        setShouldNavigate(true);
    }

    const openSettingsPopUp = (item) => {
        let {name, address} = item;
        setSelectedItem({name, address});
        setSettingsPopUp(true);
    }

    const closeSettingsPopUp = () => {
        setSettingsPopUp(false);
        setSelectedItem({ name: '', address: ''});
    }

    return (
        <div>
            <Header back text="Wallet" menu/>
            <div className="wrap">
                <CurrencyBlock name={name} commercial={commercial} warrants={warrants} balance={balance} src={src}
                               handleClick={openNetworkPopUp} selected deposit/>
                <div className={styles.row}>
                    {
                        linkInfo.map(({name, src, img}, index) => (
                            <LinkButton key={index} title={name} src={src} img={img}/>
                        ))
                    }
                </div>
                {networks.length > 1 && <div className={styles.row}>
                    {
                        networks.map((el, index) => (
                            <RadioButton key={index} name="selected_currency_wallet" value={el}
                                         onSelect={setSelectedOption1} selected={selectedOption1} inner left/>
                        ))
                    }
                </div>}
                <div
                    className={`${styles.listWrap} ${networks.length > 1 ? styles['with-radio'] : styles['without-radio']} ${deposit ? styles['with-sb'] : styles['without-sb']}`}>
                    {
                        items.map(({name, address, network}, index) => (
                            <Item name={name} address={address} network={network} key={index} openPopUp={() => openSettingsPopUp({address, name})} closePopUp={closeSettingsPopUp}/>
                        ))
                    }
                </div>
                <SettingsPopUp isVisible={settingsPopUp} closePopUp={closeSettingsPopUp} name={selectedItem.name} address={selectedItem.address}/>
                <NetworkPopUp closePopUp={closeNetworkPopUp} isVisible={networkPopUp} networks={networks} selected={selectedNetwork} onSelect={handleNetworkChange}/>
            </div>
        </div>
    )
}

export default SelectedCurrencyWallet;