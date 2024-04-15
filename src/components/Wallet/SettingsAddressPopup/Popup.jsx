import styles from "../Common/PopUp/Popup.module.scss";
import ClosePopUp from "../../Common/ClosePopUp/ClosePopUp";
import React, {useEffect, useState} from "react";
import Button from "../../Common/Button";
import {useDispatch} from "react-redux";
import {updateName} from "../../../store/user-slice";

const SettingsPopUp = ({isVisible, closePopUp, name, address, index, network}) => {
    const [addressName, setAddressName] = useState('');

    let dispatch = useDispatch();

    useEffect(() => {
        setAddressName(name);
    }, [name]);

    const handleNameChange = (e) => {
        setAddressName(e.target.value);
    }

    const handleSave = () => {
        dispatch(updateName({address, network, addressName}));
        closePopUp();
    }

    return (
        <div
            className={`${styles['settings-popup']} ${styles['bottom-popup']} ${isVisible ? styles['popup-show'] : ''}`}>
            <div className="resize">
                <div className="wrap">
                    <ClosePopUp close={closePopUp}/>
                    <h2>Settings address</h2>
                    <div className={`${styles['settings-popup__inner-wrap']}`}>
                        <div className={styles.block}>
                            <h3>Index</h3>
                            <p>{index + 1}</p>
                        </div>
                        <div className={styles.block}>
                            <label htmlFor="wallet_address_name">Name the address</label>
                            <input id="wallet_address_name" type="text" name="wallet_address_name" value={addressName} onChange={handleNameChange}/>
                        </div>
                        <div className={`${styles.block} ${styles.addressBlock}`}>
                           <h3>Wallet address</h3>
                            <p>{address}</p>
                        </div>
                        <Button text="Save" className={styles.saveBtn} handleClick={handleSave}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsPopUp;