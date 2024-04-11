import styles from "./ManagerDepositAddresses.module.scss";
import Header from "../../Common/Header/Header";
import {useSelector} from "react-redux";
import {getSelectedCurrency, getSelectedNetwork, getWalletsForSelectedNetwork} from "../../../store/selectors";
import Item from "../Item/Item";
import Button from "../../Common/Button";
import React from "react";

const ManagerDepositAddresses = () => {
    const walletsForSelectedNetwork = useSelector(getWalletsForSelectedNetwork);
    const network = useSelector(getSelectedNetwork);
    const currency = useSelector(getSelectedCurrency);
    return (
        <div className={styles.mdPage}>
            <Header back text="Manager deposit addresses"/>
            <div className="wrap">
                {
                    walletsForSelectedNetwork.map(({name, address}, index) => (
                        <Item key={index} name={name} address={address} network={network} currency={currency} index={index}/>
                    ))
                }
                <Button text="Request new address" handleClick={null}/>
            </div>
        </div>
    )
}

export default ManagerDepositAddresses;