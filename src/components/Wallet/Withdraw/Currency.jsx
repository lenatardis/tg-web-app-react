import styles from "./Currency.module.scss";
import Header from "../../Common/Header/Header";
import {getCurrencyToWithdrawInfo, getCurrencyToWithdrawNetwork} from "../../../store/selectors";
import {useSelector} from "react-redux";
import React, {useState} from "react";
import IconQr from "../../../assets/images/qr_icon.svg";
import {useTelegram} from "../../../hooks/useTelegram";

const CurrencyToWithdraw = () => {
    const [fullAddress, setFullAddress] = useState('');
    const [contractedAddress, setContractedAddress] = useState('');
    let {name, balance, src} = useSelector(getCurrencyToWithdrawInfo) ?? {};
    let selectedNetwork = useSelector(getCurrencyToWithdrawNetwork);

    const {tg} = useTelegram();

    const handleAddressChange = (e) => {
        let value = e.target.value;
        if (value.length > 10) {
            let contracted = value.slice(0, 5) + '...' + value.slice(value.length - 2, value.length);
            setFullAddress(value);
            setContractedAddress(contracted);
        }
    }

    let scanParams = {
        text: "Please scan your QR code here."
    };

    function onQrScanned(text) {
        let contractedAddress = text.slice(0, 5) + '...' + text.slice(text.length - 2, text.length);
        setFullAddress(text);
        setContractedAddress(contractedAddress);
        return true;
    }

    const handleScanner = () => {
        if (tg && typeof tg.showScanQrPopup === 'function') {
            try {
                tg.showScanQrPopup(scanParams, onQrScanned);
            } catch (error) {
                console.error("Error showing QR popup:", error);
            }
        } else {
            console.error("Telegram API or showScanQrPopup method not available.");
        }
    }

    return (
        <div>
            <Header back text="Withdraw" menu/>
            <div className="wrap">
                <div className={styles.currencyWrap}>
                    <img src={src} alt=""/>
                    <div>
                        <div className={styles.currencyLine}>
                            <p className={styles.name}>{name}</p>
                            <span className={styles.networkWrap}><span>{selectedNetwork}</span></span>
                        </div>
                        <p>{balance} {name} available</p>
                    </div>
                </div>
                <div className={styles.networkBlock}>
                    <span>{selectedNetwork}</span>
                </div>
                <div className={styles.addressRow}>
                    <input type="text" name="withdraw_address" placeholder="Insert address" value={contractedAddress}
                           onChange={handleAddressChange}/>
                    <span className={styles.qrWrap} onClick={handleScanner}>
                        <img src={IconQr} alt=""/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CurrencyToWithdraw;