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

const SelectedCurrencyWallet = () => {

    const [selectedOption1, setSelectedOption1] = useState('All');
    const [initialItems, setInitialItems] = useState([]);
    const [items, setItems] = useState([]);

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
                (networkInfo[network]?.wallets || []).map(wallet => ({
                    ...wallet,
                    network
                }))
            );
            setInitialItems(initialItems);
            setItems(initialItems);
        }
    }, []);

    useEffect(() => {
        if (selectedCurrencyInfo) {
            if (selectedOption1 === 'All') {
                setItems(initialItems);
            } else {
                setItems(initialItems.filter(el => el.network === selectedOption1));
            }
        }
    }, [selectedOption1, initialItems, selectedCurrencyInfo]);


    return (
        <div>
            <Header back text="Wallet" menu/>
            <div className="wrap">
                <CurrencyBlock name={name} commercial={commercial} warrants={warrants} balance={balance} src={src}
                               handleClick={null} selected deposit/>
                <div className={styles.row}>
                    {
                        linkInfo.map(({name, src, img}, index) => (
                            <LinkButton key={index} title={name} src={src} img={img}/>
                        ))
                    }
                </div>
                {name === 'USDT' && <div className={styles.row}>
                    {
                        networks.map((el, index) => (
                            <RadioButton key={index} name="selected_currency_wallet" value={el} onSelect={setSelectedOption1} selected={selectedOption1} inner left/>
                        ))
                    }
                </div>}
                {
                    items.map(({name, address, network}, index) => (
                        <Item name={name} address={address} network={network} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default SelectedCurrencyWallet;