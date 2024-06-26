import styles from "./Popup.module.scss";
import ClosePopUp from "../../Common/ClosePopUp/ClosePopUp";
import RadioButtonRow from "../../Common/RadioButtonRow/RadioButtonRow";
import React from "react";
import {useSelector} from "react-redux";
import {getSelectedCurrencyInfo} from "../../../store/selectors";

const NetworkPopUp = ({closePopUp, isVisible, selected, onSelect}) => {
    let {networks = []} = useSelector(getSelectedCurrencyInfo) ?? {};

    return (
        <div className={`${styles['network-popup']} ${styles['bottom-popup']} ${isVisible ? styles['popup-show'] : ''}`}>
            <div className="resize">
                <div className="wrap">
                    <ClosePopUp close={closePopUp}/>
                    <h2>Select network</h2>
                    <div className={`${styles['network-popup__inner-wrap']}`}>
                        {
                            networks.map((el, index) => (
                               <RadioButtonRow name="selected_network" value={el} key={index} selected={selected} onSelect={onSelect} networkrow/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NetworkPopUp;