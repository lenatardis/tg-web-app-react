import styles from "./Currency.module.scss";
import Header from "../../Common/Header/Header";
import {getCurrencyToWithdrawInfo, getCurrencyToWithdrawNetwork} from "../../../store/selectors";
import {useSelector} from "react-redux";

const CurrencyToWithdraw = () => {
    let {name, balance, src} = useSelector(getCurrencyToWithdrawInfo)  ?? {};
    let selectedNetwork = useSelector(getCurrencyToWithdrawNetwork);

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
            </div>
        </div>
    )
}

export default CurrencyToWithdraw;