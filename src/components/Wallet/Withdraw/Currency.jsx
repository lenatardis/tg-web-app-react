import styles from "./Currency.module.scss";
import Header from "../../Common/Header/Header";
import {getCurrencyToWithdrawInfo, getCurrencyToWithdrawNetwork} from "../../../store/selectors";
import {useDispatch, useSelector} from "react-redux";
import React, {useState, useEffect} from "react";
import IconQr from "../../../assets/images/qr_icon.svg";
import {useTelegram} from "../../../hooks/useTelegram";
import IconAdd from "../../../assets/images/add.svg";
import IconBin from "../../../assets/images/bin.svg";
import IconInfo from "../../../assets/images/info.svg";
import Button from "../../Common/Button";
import {setAddressToWithdraw, setAmountToWithdraw} from "../../../store/user-slice";
import PreviewPopUp from "./PreviewPopUp/PreviewPopUp";

const CurrencyToWithdraw = () => {
    const [fullAddress, setFullAddress] = useState('');
    const [contractedAddress, setContractedAddress] = useState('');
    const [showAdd, setShowAdd] = useState(true);
    const [amount, setAmount] = useState('');
    const [rate, setRate] = useState('0.00');
    const [previewPopUp, setPreviewPopUp] = useState(false);

    let {name, balance, src} = useSelector(getCurrencyToWithdrawInfo) ?? {};
    let selectedNetwork = useSelector(getCurrencyToWithdrawNetwork);
    let exchangeCoefficient = 1;
    const fee = 3;
    const min = 3;

    const {tg} = useTelegram();

    let dispatch = useDispatch();

    const handleAddressChange = (e) => {
        let value = e.target.value;
        if (value.length > 10) {
            let contracted = value.slice(0, 5) + '...' + value.slice(value.length - 2, value.length);
            setFullAddress(value);
            setContractedAddress(contracted);
            setShowAdd(false);
            dispatch(setAddressToWithdraw(value));
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
        dispatch(setAddressToWithdraw(text));
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
            dispatch(setAmountToWithdraw(value));
        }
    }

    const processNumericValue = (displayValue) => {
        const inputString = String(displayValue);
        const numericValue = parseFloat(inputString.replace(/,/g, ''));
        return numericValue;
    }

    const handleMaxPaste = () => {
        let value = processNumericValue(balance)
        setAmount(value);
        dispatch(setAmountToWithdraw(value));
    }

    useEffect(() => {
        if (amount === '') {
            setRate('0.00');
        } else {
            const numericAmount = parseFloat(amount);
            const calculatedRate = numericAmount * exchangeCoefficient;
            setRate(calculatedRate.toFixed(2));
        }
    }, [amount, exchangeCoefficient]);

    const openPopUp = () => {
        setPreviewPopUp(true);
    }

    const closePreviewPopUp = () => {
        setPreviewPopUp(false);
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
                                   placeholder="0.00000" inputMode="numeric"/>
                        </div>
                        <span className={styles.max} onClick={handleMaxPaste}>Max</span>
                    </div>
                </div>
                <p className={styles.coeffBlock}>≈ {rate} USD</p>
                <div className={styles.rateRow}><span>Fee</span><span>{fee} {name}</span></div>
                <div className={styles.rateRow}><span>Minimum</span><span>{min} {name}</span></div>
                <div className={styles.rateRow}><span>Maximum withdrawal</span><span>{balance} {name}</span></div>
                <Button text="Preview withdrawal" handleClick={openPopUp} className={styles.btn}/>
                <PreviewPopUp closePopUp={closePreviewPopUp} isVisible={previewPopUp}/>
            </div>
        </div>
    )
}

export default CurrencyToWithdraw;