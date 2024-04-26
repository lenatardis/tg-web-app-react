import styles from "./HistoryPopUpItem.module.scss";
import IconBin from "../../../assets/images/bin.svg";

const HistoryPopUpItem = ({date, time, amount, price, accepted, parent, type, deleteItem}) => {
    const isOrdersParent = parent === "orders";
    return (
        <div className={styles.item}>
            <div className={styles.titleRow}>
                <div>
                    <h2>BTC/USDT</h2>
                    {isOrdersParent && accepted !== undefined && (
                        accepted
                            ? <span className={styles.accepted}>Accepted</span>
                            : <span className={styles.cancelled}>Cancelled</span>
                    )}
                </div>
                <div>
                    <span>{date}</span>
                    <span>{time}</span>
                </div>
            </div>
            <div className={`${styles.infoBlock} ${isOrdersParent ? styles.orderInfoBlock : ''}`}>
                <div>
                    <div>
                        <h3>Side</h3>
                        <p>Buy</p>
                    </div>
                    {isOrdersParent && type && (
                        <div>
                            <h3>Type</h3>
                            <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
                        </div>
                    )}
                    <div>
                        <h3>Amount</h3>
                        <p>{amount}</p>
                    </div>
                    <div>
                        <h3>Orders price</h3>
                        <p>{price}</p>
                    </div>
                </div>
                {!isOrdersParent &&
                    <button onClick={deleteItem}>
                        <img src={IconBin} alt=""/>
                    </button>
                }
            </div>
        </div>
    )
}

export default HistoryPopUpItem;