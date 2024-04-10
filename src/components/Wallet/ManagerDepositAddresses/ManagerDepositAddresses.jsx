import styles from "./ManagerDepositAddresses.module.scss";
import Header from "../../Common/Header/Header";
import {useSelector} from "react-redux";
import {getSelectedNetwork, getWalletsForSelectedNetwork} from "../../../store/selectors";
import Item from "../Item/Item";
import RadioButton from "../../Common/RadioButton/RadioButton";
import React from "react";

const ManagerDepositAddresses = () => {
    const walletsForSelectedNetwork = useSelector(getWalletsForSelectedNetwork);
    const network = useSelector(getSelectedNetwork);
    return (
        <div>
            <Header back text="Manager deposit addresses"/>
            <div className="wrap">
                {
                    walletsForSelectedNetwork.map(({name, address}, index) => (
                        <Item key={index} name={name} address={address} network={network}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ManagerDepositAddresses;