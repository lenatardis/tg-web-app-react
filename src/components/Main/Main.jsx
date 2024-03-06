import styles from "./Main.module.scss";
import {useSelector} from "react-redux";
import Header from "./Header";
import {getUser} from "../../store/selectors";

const Main = () => {
    const {currency, total, sign} = useSelector(getUser)[0];
    return (
        <div>
            <Header back text="Main" menu/>
            <div className={`${styles.main} wrap`}>
                <div className={`${styles['total-block']}`}>
                    <p>Total amount in wallets</p>
                    <div className={`${styles['currency-block']}`}>
                        <span className={styles.total}>{sign}{' '}{total}</span>
                        <span className={styles.currency}>{currency.toUpperCase()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;