import styles from "../Common/ConfigPopUp/Popup.module.scss";
import ClosePopUp from "../../Common/ClosePopUp/ClosePopUp";
import React, {useEffect, useState} from "react";
import Button from "../../Common/Button";
import {useDispatch} from "react-redux";
import {updateName} from "../../../store/user-slice";
import CopyItem from "../../Common/CopyItem/CopyItem";

const SettingsPopUp = ({isVisible, closePopUp, name, address}) => {
    const [addressName, setAddressName] = useState('');
    const [prevAddressName, setPrevAddressName] = useState('');
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [firstUpdate, setFirstUpdate] = useState(false);

    let dispatch = useDispatch();

    useEffect(() => {
        setAddressName(name);
        if (name && !firstUpdate) {
            setPrevAddressName(name);
        }
    }, [name]);

    useEffect(() => {
        if (addressName && addressName !== prevAddressName) {
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false);
        }
    }, [addressName, prevAddressName]);


    const handleNameChange = (e) => {
        setAddressName(e.target.value);
    }

    const handleSave = () => {
        dispatch(updateName({address, addressName}));
        closePopUp();
        setAddressName('');
        setPrevAddressName(addressName);
    }

    return (
        <div
            className={`${styles['settings-popup']} ${styles['bottom-popup']} ${isVisible ? styles['popup-show'] : ''}`}>
            <div className="resize">
                <div className="wrap">
                    <ClosePopUp close={closePopUp}/>
                    <h2>Setting wallet</h2>
                    <div className={`${styles['settings-popup__inner-wrap']}`}>
                        <div className={styles.block}>
                            <label htmlFor="wallet_address_name">Name the wallet</label>
                            <input id="wallet_address_name" type="text" name="wallet_address_name" value={addressName}
                                   onChange={handleNameChange}/>
                        </div>
                        <div className={styles.addressWrap}>
                            <div className={`${styles.block} ${styles.addressBlock}`}>
                                <h3>Wallet address</h3>
                                <p>{address.slice(0, 5) + '...' + address.slice(address.length - 2, address.length)}</p>
                            </div>
                            <CopyItem code={address}/>
                        </div>
                        <Button text="Save"
                                className={`${styles.saveBtn} ${isButtonEnabled ? styles.enabledBtn : styles.disabledBtn}`}
                                disabled={!isButtonEnabled} handleClick={handleSave}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsPopUp;