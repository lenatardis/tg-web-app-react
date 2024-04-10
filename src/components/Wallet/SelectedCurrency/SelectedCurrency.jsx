import Header from "../../Common/Header/Header";
import styles from "./SelectedCurrency.module.scss";
import {getSelectedCurrencyInfo, getNetworks} from "../../../store/selectors";
import {useSelector} from "react-redux";
import CurrencyBlock from "../Common/CurrencyBlock/CurrencyBlock";
import IconArrowUp from "../../../assets/images/arr_up.svg";
import IconArrowDown from "../../../assets/images/arr_down.svg";
import IconRefresh from "../../../assets/images/refresh.svg";
import LinkButton from "../Common/Link/Link";
import RadioButton from "../../Common/RadioButton/RadioButton";
import Item from "../Item/Item.jsx";
import React, {useEffect, useState} from "react";
import NetworkPopUp from "./NetworkPopup/Popup";

const SelectedCurrencyWallet = () => {

    const [selectedOption1, setSelectedOption1] = useState('All');
    const [initialItems, setInitialItems] = useState([]);
    const [items, setItems] = useState([]);
    const [deposit, setDeposit] = useState(true);
    const [networkPopUp, setNetworkPopUp] = useState(false);
    const [selectedNetwork, setSelectedNetwork] = useState('');

    let selectedCurrencyInfo = useSelector(getSelectedCurrencyInfo);

    let {name, commercial, warrants, balance, src, networks} = selectedCurrencyInfo;

    let networkInfo = useSelector(getNetworks);


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
    }, []);

   /* useEffect(() => {
        if (networks) setSelectedNetwork(networks[0])
    }, []);*/

    useEffect(() => {
        if (selectedCurrencyInfo) {
            if (selectedOption1 === 'All') {
                setItems(initialItems);
            } else {
                setItems(initialItems.filter(el => el.network === selectedOption1));
            }
        }
    }, [selectedOption1, initialItems, selectedCurrencyInfo]);

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

    const closeNetworkPopUp = () => {
        setNetworkPopUp(false);
    }

    const openNetworkPopUp = () => {
        setNetworkPopUp(true);
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
                            <Item name={name} address={address} network={network} key={index}/>
                        ))
                    }
                </div>
                <NetworkPopUp closePopUp={closeNetworkPopUp} isVisible={networkPopUp} networks={networks} selected={selectedNetwork} onSelect={setSelectedNetwork}/>
            </div>
        </div>
    )
}

export default SelectedCurrencyWallet;