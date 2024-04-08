import styles from "./CurrencyBlock.module.scss";
import IconAdd from "../../../../assets/images/plus-circle.svg";
import IconInfo from "../../../../assets/images/info.svg";

const CurrencyBlock = ({name, commercial, warrants, balance, src, handleClick, selected, deposit}) => {

    return (
        <div className={styles.currencyBlock} onClick={handleClick}>
            <div className={styles.imgRow}>
                <div>
                    <img src={src} alt=""/>
                    <span>{name}</span>
                </div>
                {!selected && <button>
                    <span className={styles.buttonWrap}>
                        <span className={styles.circle}></span>
                        <span className={styles.circle}></span>
                        <span className={styles.circle}></span>
                    </span>
                </button>}
                {selected && <a className={styles.addWrap}>
                    <span>Add address</span>
                    <img src={IconAdd} alt=""/>
                </a>}
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
            {deposit && <div className={styles.statusBlock}>
                <div>
                    <div>
                        <img src={IconInfo} alt=""/>
                        <span>2,000 USDT deposit is processing.</span>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default CurrencyBlock;