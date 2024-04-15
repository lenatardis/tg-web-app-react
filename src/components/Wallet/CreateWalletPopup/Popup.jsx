import styles from "../Common/PopUp/Popup.module.scss";
import ClosePopUp from "../../Common/ClosePopUp/ClosePopUp";
import React, {useEffect, useRef, useState} from "react";
import Button from "../../Common/Button";
import {useDispatch, useSelector} from "react-redux";
import CopyItem from "../../Common/CopyItem/CopyItem";
import IconUp from "../../../assets/images/up.svg";
import {getSelectedCurrencyInfo} from "../../../store/selectors";
import useClickOutside from "../../../hooks/useClickOutside";

const CreateWalletPopUp = ({isVisible, closePopUp}) => {
    const [walletName, setWalletName] = useState('');
    const [selectedNetwork, setSelectedNetwork] = useState('');
    const [dropDownOpen, setDropDownOpen] = useState(false);

    let availableNetworks = useSelector(getSelectedCurrencyInfo).networks;

    useEffect(() => {
        setSelectedNetwork(availableNetworks[0]);
    }, [availableNetworks]);

    const dropdownRef = useRef(null);
    useClickOutside(dropdownRef, () => setDropDownOpen(false));

    let dispatch = useDispatch();

    const handleSelect = (network) => {
        setSelectedNetwork(network);
        setDropDownOpen(false);
    };

    const close = () => {
        closePopUp();
        setWalletName('');
    }

    const handleChange = (e) => {
        setWalletName(e.target.value);
    }

    let generatedAddress = 'lQtfA...w0';

    return (
        <div
            className={`${styles['settings-popup']} ${styles['createWallet']} ${styles['bottom-popup']} ${isVisible ? styles['popup-show'] : ''}`}>
            <div className="resize">
                <div className="wrap">
                    <ClosePopUp close={close}/>
                    <h2>Create a wallet</h2>
                    <div className={`${styles['settings-popup__inner-wrap']}`}>
                        <div className={styles.block}>
                            <label htmlFor="new_wallet_name">Name the wallet</label>
                            <input id="new_wallet_name" type="text" name="new_wallet_name" value={walletName}
                                   onChange={handleChange} placeholder="Name for the wallet"/>
                        </div>
                        <div className={`${styles.block} ${styles.addressBlock}`}>
                            <div>
                                <h3>New wallet address</h3>
                                <p>{generatedAddress}</p>
                            </div>
                            <CopyItem code={generatedAddress}/>
                        </div>
                            <div className={`${styles.block} ${styles.dropdownBlock}`}>
                                <div className={styles.dropdownWrap} ref={dropdownRef}>
                                    <div onClick={() => setDropDownOpen(dropDownOpen => !dropDownOpen)}>
                                        <span>{selectedNetwork}</span>
                                        <button>
                                            <img src={IconUp} alt=""
                                                 className={`${!dropDownOpen ? styles['icon-flipped'] : ''}`}/>
                                        </button>
                                    </div>
                                    {dropDownOpen && <ul className={styles.dropdownList}>
                                        {availableNetworks.map((el, index) => (
                                        <li key={index}  onClick={() => handleSelect(el)}>
                                            <span>{el}</span>
                                        </li>
                                    ))}
                                    </ul>}
                                </div>
                            </div>
                        <Button text="Save" className={styles.saveBtn} handleClick={null}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateWalletPopUp;