import styles from "./Warrant.module.scss";
import {getGiveCurrency, getGetCurrency} from "../../../../store/selectors";
import {useSelector} from "react-redux";
import IconArrow from "../../../../assets/images/arr-right.svg";
import IconEtherium from "../../../../assets/images/etherium.svg";
import IconBitcoin from "../../../../assets/images/bitcoin.svg";
import IconTether from "../../../../assets/images/tether.svg";
import IconLitecoin from "../../../../assets/images/litecoin.svg";
import {useNavigate} from "react-router-dom";

const Warrant = () => {
    let give = useSelector(getGiveCurrency);
    let get = useSelector(getGetCurrency);
    let navigate = useNavigate();

    const cryptocurrencies = [
        {name: 'Etherium', src: IconEtherium, abbreviation: 'ETH'},
        {name: 'Bitcoin', src: IconBitcoin, abbreviation: 'BTC'},
        {name: 'Tether', src: IconTether, abbreviation: 'USDT'},
        {name: 'Litecoin', src: IconLitecoin, abbreviation: 'LTC'}
    ];

    const src1 = cryptocurrencies.find(el => el.abbreviation === give).src;
    const src2 = cryptocurrencies.find(el => el.abbreviation === get).src;


    return (
        <div className={styles.warrantWrap}>
            <div className={styles.warrantHeader}>
                <span className={styles.arrowWrap} onClick={() => {navigate(-1);}}>
                    <img src={IconArrow} alt=""/>
                </span>
                <h2>Warrant is executed</h2>
            </div>
            <div className={styles.dashboardWrap}>
                <div className="wrap">
                    <div className={styles.exchangePanel}>
                        <div className={styles.imgRow}>
                            <img src={src1} alt=""/>
                            <span className={styles.line}></span>
                            <button>
                                <img src={IconArrow} alt=""/>
                            </button>
                            <span className={styles.line}></span>
                            <img src={src2} alt=""/>
                        </div>
                        <div className={`${styles.currencyTitle} ${styles.row}`}>
                            <span>{give}</span>
                            <span>{get}</span>
                        </div>
                        <div className={`${styles.row}`}>
                            <span>0.665336</span>
                            <span>0.5</span>
                        </div>
                    </div>
                    <div className={`${styles.panel} ${styles.statusPanel}`}>
                        <div className={styles.row}>
                            <span>Day</span>
                            <span>Today 23:14</span>
                        </div>
                        <div className={`${styles.row} ${styles.statusRow}`}>
                            <span>Status</span>
                            <span>Processing</span>
                        </div>
                    </div>
                    <div className={styles.panel}>
                        <div className={`${styles.row} ${styles.commisionRow}`}>
                            <span>Commision</span>
                            <span>0 ? (0,00$)</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Warrant;