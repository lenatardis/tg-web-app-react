import styles from "./Status.module.scss";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import IconArrow from "../../../assets/images/arr-right.svg"
import {
    getAddressToWithdraw,
    getAmountToWithdraw,
    getCurrencyToWithdrawInfo,
    getCurrencyToWithdrawNetwork
} from "../../../store/selectors";
import React, {useState} from "react";
import Button from "../../Common/Button";
import CurrencyPanel from "./CurrencyPanel";
import CopyItem from "../../Common/CopyItem/CopyItem";

const Status = () => {
    let {name, src} = useSelector(getCurrencyToWithdrawInfo) ?? {};
    let amount = useSelector(getAmountToWithdraw);
    let randomNumber = 40.98;
    let total = (parseFloat(amount) + randomNumber).toFixed(2);
    let selectedNetwork = useSelector(getCurrencyToWithdrawNetwork);
    let address = useSelector(getAddressToWithdraw);
    let navigate = useNavigate();
    let date = 'Today 23:14';
    let status = 'Processing';
    let id = 'a2f75a5af987dgdggdjjdjdjdj347cbbdfa8';

    return (
        <div className={styles.authenticatorWrap}>
            <div className={styles.authenticatorHeader}>
                <span className={styles.arrowWrap} onClick={() => {
                    navigate(-1);
                }}>
                    <img src={IconArrow} alt=""/>
                </span>
                <h2>{name} {selectedNetwork}</h2>
            </div>
            <div className={styles.dashboardWrap}>
                <div className="wrap">
                    <CurrencyPanel text1={amount} text2={total}/>
                    <div className={styles.infoBlock}>
                        <div>
                            <span>Time</span>
                            <span>{date}</span>
                        </div>
                        <div>
                            <span>Status</span>
                            <span className={styles.status}>{status}</span>
                        </div>
                        <div>
                            <span>Wallet</span>
                            <span>{address.slice(0, 5) + '...' + address.slice(id.length - 2, address.length)}</span>
                        </div>
                    </div>
                    <div className={styles.infoBlock}>
                        <div className={styles.commissionRow}>
                            <span>Commission</span>
                            <span>0 ? (0,00$)</span>
                        </div>
                    </div>
                    <div className={styles.copyBlock}>
                        <div>
                            <p>TxID</p>
                            <p>{id.slice(0, 12) + '...' + id.slice(id.length - 10, id.length)}</p>
                        </div>
                        <CopyItem code={id}/>
                    </div>
                    <Button text="View on block exprorer" className={styles.btn} handleClick={null} transparent/>
                </div>
            </div>
        </div>
    )
}

export default Status;