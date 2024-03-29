import styles from "./Warrant.module.scss";
import {getGiveCurrency, getGetCurrency} from "../../../../store/selectors";
import {useSelector} from "react-redux";
import IconArrow from "../../../../assets/images/arr-right.svg";
import {useNavigate} from "react-router-dom";

const Warrant = () => {
    let give = useSelector(getGiveCurrency);
    let get = useSelector(getGetCurrency);
    let navigate = useNavigate();

    return (
        <div className={styles.warrantWrap}>
            <div className={styles.warrantHeader}>
                <span className={styles.arrowWrap} onClick={() => {navigate(-1);}}>
                    <img src={IconArrow} alt=""/>
                </span>
                <h2>Warrant is executed</h2>
            </div>
            <div className={styles.dashboardWrap}>

            </div>
        </div>
    )
}

export default Warrant;