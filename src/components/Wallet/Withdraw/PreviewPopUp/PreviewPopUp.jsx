import styles from "./PreviewPopUp.module.scss";
import ClosePopUp from "../../../Common/ClosePopUp/ClosePopUp";
import {useSelector} from "react-redux";
import {
    getAddressToWithdraw,
    getAmountToWithdraw,
    getCurrencyToWithdrawInfo,
    getCurrencyToWithdrawNetwork
} from "../../../../store/selectors";
import IconArrow from "../../../../assets/images/arr_down.svg";
import React from "react";
import Button from "../../../Common/Button";

const PreviewPopUp = ({closePopUp, isVisible}) => {
    let amount = useSelector(getAmountToWithdraw);
    let randomNumber = 40.98;
    let total = (parseFloat(amount) + randomNumber).toFixed(2);
    let {name} = useSelector(getCurrencyToWithdrawInfo) ?? {};
    let selectedNetwork = useSelector(getCurrencyToWithdrawNetwork);
    let address = useSelector(getAddressToWithdraw);

    return (
        <div
            className={`${styles['preview-popup']} ${styles['bottom-popup']} ${isVisible ? styles['popup-show'] : ''}`}>
            <div className="resize">
                <div className="wrap">
                    <ClosePopUp close={closePopUp}/>
                    <div className={`${styles['preview-popup__inner-wrap']}`}>
                        <div className={styles.amountWrap}>
                            <p>- {useSelector(getAmountToWithdraw)}</p>
                            <p>{total}$</p>
                        </div>
                        <div className={styles.infoBlock}>
                            <div>
                                <span>Network</span>
                                <span className={styles.info}>
                                    <span>{name}</span>
                                    <span className={styles.networkWrap}>
                                        <span>{selectedNetwork}</span>
                                    </span>
                                </span>
                            </div>
                            <p>Sent</p>
                            <p>Telegram bot (TYSjTck…L46GuWH)</p>
                            <p>
                                <span className={styles.arrowWrap}><img src={IconArrow} alt=""/></span>
                            </p>
                            <p>{address.slice(0, 5) + '...' + address.slice(address.length - 2, address.length)}</p>
                        </div>
                        <div className={styles.totalBlock}>
                            <div>
                                <span>Commission</span>
                                <span>0 ? (0,00$)</span>
                            </div>
                            <div>
                                <span>Total</span>
                                <span className={styles.total}>= {total}$</span>
                            </div>


                        </div>
                        <Button text="Verify/enter" className={styles.btn} handleClick={null}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviewPopUp;