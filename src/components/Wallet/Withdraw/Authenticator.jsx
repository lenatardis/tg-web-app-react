import styles from "./Authenticator.module.scss";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import IconArrow from "../../../assets/images/arr-right.svg"
import {getAmountToWithdraw, getCurrencyToWithdrawInfo} from "../../../store/selectors";
import {useState} from "react";
import IconQuestionMark from "../../../assets/images/question-mark.svg";
import Button from "../../Common/Button";

const Authenticator = () => {
    let {name, src} = useSelector(getCurrencyToWithdrawInfo) ?? {};
    let amount = useSelector(getAmountToWithdraw);
    let navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        let value = e.target.value;
        // extra validation to exclude '-','.','e'
        const valid = /^[0-9]*$/;
        if (value === '' || valid.test(value)) {
            setInputValue(value);
        }
    }

    const handleNavigation = () => {
        navigate('/wallet/withdraw/status')
    }

    return (
        <div className={styles.authenticatorWrap}>
            <div className={styles.authenticatorHeader}>
                <span className={styles.arrowWrap} onClick={() => {navigate(-1);}}>
                    <img src={IconArrow} alt=""/>
                </span>
                <h2>Authenticator app</h2>
            </div>
            <div className={styles.dashboardWrap}>
                <div className="wrap">
                    <div className={styles.currencyPanel}>
                        <div className={styles.currencyWrap}>
                            <img src={src} alt=""/>
                            <span>{name === 'USDT'? 'Tether USD': name}</span>
                        </div>
                        <div className={styles.amountWrap}>
                            <p>- {amount}</p>
                        </div>

                    </div>
                    <p>Enter the Sign-in 2FA code from your<br/>authenticator app</p>
                    <input type="text" className={styles.authInput} placeholder="2FA code" value={inputValue} onChange={handleInputChange} inputMode="numeric"/>
                    <p className={styles.support}>
                        <img src={IconQuestionMark} alt=""/>
                        <span>Contact Support</span>
                    </p>
                    <Button text="Enter" handleClick={handleNavigation} className={styles.btn}/>
                </div>
            </div>
        </div>
    )
}

export default Authenticator;