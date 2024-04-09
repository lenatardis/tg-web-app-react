import styles from "./Item.module.scss";
import IconArrow from "../../../assets/images/arr-gr.svg";
import CopyItem from "../../Common/CopyItem/CopyItem";
import IconPencil from "../../../assets/images/pencil.svg";

const Item = ({name, address, network}) => {
    return (
        <div className={styles.itemWrap}>
            <div>
                <div className={styles.titleBlock}>
                    <h3>{name}</h3>
                    <span className={styles.networkWrap}>
                        <span>{network}</span>
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
                    {address}
                </span>
                <div className={styles.buttonBlock}>
                    <button>
                        <CopyItem code={address}/>
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