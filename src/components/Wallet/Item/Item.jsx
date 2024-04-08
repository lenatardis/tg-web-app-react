import styles from "./Item.module.scss";
import IconArrow from "../../../assets/images/arr-gr.svg";
import CopyItem from "../../Common/CopyItem/CopyItem";
import IconPencil from "../../../assets/images/pencil.svg";

const Item = () => {
    return (
        <div className={styles.itemWrap}>
            <div>
                <div className={styles.titleBlock}>
                    <h3>Wallet - 1</h3>
                    <span className={styles.networkWrap}>
                        <span>TRC20</span>
                    </span>
                </div>
                <div>
                    <a className={styles.arrBlock}>
                        <span>Deposit</span>
                        <button>
                            <img src={IconArrow} alt=""/>
                        </button>
                    </a>
                </div>
            </div>
            <div>
                <span className={styles.address}>
                    AdXn0uQbzN
                </span>
                <div className={styles.buttonBlock}>
                    <button>
                        <CopyItem code="123"/>
                    </button>
                    <button>
                        <img src={IconPencil} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Item;