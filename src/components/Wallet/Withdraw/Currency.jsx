import styles from "./Currency.module.scss";
import Header from "../../Common/Header/Header";
import {getCurrencyToWithdrawInfo, getCurrencyToWithdrawNetwork} from "../../../store/selectors";
import {useSelector} from "react-redux";
import React, {useState} from "react";
import IconQr from "../../../assets/images/qr_icon.svg";
import {useTelegram} from "../../../hooks/useTelegram";
import IconAdd from "../../../assets/images/add.svg";
import IconBin from "../../../assets/images/bin.svg";
import IconInfo from "../../../assets/images/info.svg";

const CurrencyToWithdraw = () => {
    const [fullAddress, setFullAddress] = useState('');
    const [contractedAddress, setContractedAddress] = useState('');
    const [showAdd, setShowAdd] = useState(true);
    const [amount, setAmount] = useState('');
    let {name, balance, src} = useSelector(getCurrencyToWithdrawInfo) ?? {};
    let selectedNetwork = useSelector(getCurrencyToWithdrawNetwork);

    const {tg} = useTelegram();

    const handleAddressChange = (e) => {
        let value = e.target.value;
        if (value.length > 10) {
            let contracted = value.slice(0, 5) + '...' + value.slice(value.length - 2, value.length);
            setFullAddress(value);
            setContractedAddress(contracted);
            setShowAdd(false);
        }
    }

    let scanParams = {
        text: "Please scan your QR code here."
    };

    function onQrScanned(text) {
        let contractedAddress = text.slice(0, 5) + '...' + text.slice(text.length - 2, text.length);
        setFullAddress(text);
        setContractedAddress(contractedAddress);
        setShowAdd(false);
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

    const handleDelete = () => {
        setFullAddress('');
        setContractedAddress('');
        setShowAdd(true);
    }

    const handleAmountChange = (e) => {
        let value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setAmount(value);
        }
    }

    const processNumericValue = (displayValue) => {
        const inputString = String(displayValue);
        const numericValue = parseFloat(inputString.replace(/,/g, ''));
        return numericValue;
    }

    const handleMaxPaste = () => {
        setAmount(processNumericValue(balance));
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
                    <div>
                        <input type="text" name="withdraw_address" placeholder="Insert address"
                               value={contractedAddress}
                               onChange={handleAddressChange}/>
                        {showAdd ? <img src={IconAdd} alt=""/> : <img src={IconBin} alt="" onClick={handleDelete}/>}
                    </div>
                    <span className={styles.qrWrap} onClick={handleScanner}>
                        <img src={IconQr} alt=""/>
                    </span>
                </div>
                <div className={styles.infoBlock}>
                    <div>
                        <div>
                            <img src={IconInfo} alt=""/>
                        </div>
                        <span>Only withdraw {name} to {selectedNetwork} addresses. Withdrawals to addresses generated for other networks could result in loss of funds</span>
                    </div>
                </div>
                <div className={styles.amountBlock}>
                    <p>Amount in {name}</p>
                    <div className={styles.inputRow}>
                        <div>
                            <span>=</span>
                            <input type="text" name="withdraw_amount" value={amount} onChange={handleAmountChange}
                                   placeholder="0.00000"/>
                        </div>
                        <span className={styles.max} onClick={handleMaxPaste}>Max</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrencyToWithdraw;