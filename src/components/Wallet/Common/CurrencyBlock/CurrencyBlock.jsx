import styles from "./CurrencyBlock.module.scss";
import {useNavigate} from "react-router-dom";

const CurrencyBlock = ({name, commercial, warrants, balance, src, handleClick}) => {

    return (
        <div className={styles.currencyBlock} onClick={handleClick}>
            <div className={styles.imgRow}>
                <div>
                    <img src={src} alt=""/>
                    <span>{name}</span>
                </div>
                <button>
                    <span className={styles.buttonWrap}>
                        <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                    </span>

                </button>
            </div>
            <div className={styles.infoBlock}>
                <div>
                    <span>Commercial</span>
                    <span>{commercial}</span>
                </div>
                <div>
                    <span>In warrants</span>
                    <span>{warrants}</span>
                </div>
                <div>
                    <span>Final balanas</span>
                    <span>{balance}</span>
                </div>
            </div>

        </div>
    )
}

export default CurrencyBlock;