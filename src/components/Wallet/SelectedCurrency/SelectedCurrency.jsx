import Header from "../../Common/Header/Header";
import styles from "./SelectedCurrency.module.scss";
import {getSelectedCurrencyWallet} from "../../../store/selectors";
import {useSelector} from "react-redux";
import CurrencyBlock from "../Common/CurrencyBlock/CurrencyBlock";
import IconArrowUp from "../../../assets/images/arr_up.svg";
import IconArrowDown from "../../../assets/images/arr_down.svg";
import IconRefresh from "../../../assets/images/refresh.svg";
import LinkButton from "../Common/Link/Link";
import React from "react";

const SelectedCurrencyWallet = () => {

    let wallet = useSelector(getSelectedCurrencyWallet);
    let {name, commercial, warrants, balance, src} = wallet;

    const linkInfo = [
        {name: "Deposit", src: "/", img: IconArrowUp},
        {name: "Withdraw", src: "/", img: IconArrowDown},
        {name: "Exchange", src: "/pro/exchange", img: IconRefresh},
    ]

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
            </div>
        </div>
    )
}

export default SelectedCurrencyWallet;