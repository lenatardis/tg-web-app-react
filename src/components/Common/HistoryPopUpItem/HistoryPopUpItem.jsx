import styles from "./HistoryPopUpItem.module.scss";
import IconBin from "../../../assets/images/bin.svg";

const HistoryPopUpItem = ({date1, date2, amount, price}) => {
    return (
        <div className={styles.item}>
            <div className={styles.titleRow}>
                <div>
                    <h2>BTC/USDT</h2>
                   {/* <span>Buy</span>*/}
                </div>
                <div>
                    <span>{date1}</span>
                    <span>{date2}</span>
                </div>
            </div>
            <div className={styles.infoBlock}>
                <div>
                    <div>
                        <h3>Side</h3>
                        <p>Buy</p>
                    </div>
                    <div>
                        <h3>Amount</h3>
                        <p>{amount}</p>
                    </div>
                    <div>
                        <h3>Orders price</h3>
                        <p>{price}</p>
                    </div>
                </div>
                <button>
                    <img src={IconBin} alt=""/>
                </button>
            </div>
        </div>
    )
}

export default HistoryPopUpItem;