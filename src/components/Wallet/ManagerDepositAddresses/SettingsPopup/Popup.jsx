import styles from "./Popup.module.scss";
import ClosePopUp from "../../../Common/ClosePopUp/ClosePopUp";
import React from "react";

const SettingsPopUp = ({isVisible, closePopUp, name, address, index}) => {
    return (
        <div className={`${styles['settings-popup']} ${styles['bottom-popup']} ${isVisible ? styles['popup-show'] : ''}`}>
            <div className="resize">
                <div className="wrap">
                    <ClosePopUp close={closePopUp}/>
                    <h2>Settings address</h2>
                    <div className={`${styles['settings-popup__inner-wrap']}`}>
                        <h1>{name}</h1>
                        <h2>{address}</h2>
                        <h3>{index + 1}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsPopUp;