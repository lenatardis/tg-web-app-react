import styles from "./Item.module.scss";
import IconArrow from "../../../../assets/images/arr-gr.svg";
import CopyItem from "../../../Common/CopyItem/CopyItem";
import IconPencil from "../../../../assets/images/pencil.svg";

const Item = ({name, address, network, currency, index, openPopUp, deposit, handleNavigation}) => {
    return (
        <div
            className={`${styles.itemWrap} ${currency ? styles.currencyWrap : ''} ${deposit ? styles.depositWrap : ''}`}
            onClick={handleNavigation ? handleNavigation : null}>
            <div>
                <div className={styles.titleBlock}>
                    <h3>{name}</h3>
                    <span className={styles.networkWrap}>
                      <span>{currency ? `${currency}\u00A0` : ''}{network}</span>
                    </span>
                </div>
                <div>
                    {!currency && !deposit && <a className={styles.arrBlock}>
                        <span>Deposit</span>
                        <button>
                            <img src={IconArrow} alt=""/>
                        </button>
                    </a>}
                    {currency && deposit && <a className={styles.arrBlock}>
                        <button>
                            <img src={IconArrow} alt=""/>
                        </button>
                    </a>}
                </div>
            </div>
            {currency && <div className={styles.indexBlock}>
                <p>Index: {index + 1}</p>
            </div>}
            <div>
                <span className={styles.address}>
                    {address}
                </span>
                <div className={styles.buttonBlock}>
                    <button>
                        <CopyItem code={address}/>
                    </button>
                    {!deposit && <button onClick={openPopUp ? openPopUp : null}>
                        <img src={IconPencil} alt=""/>
                    </button>}
                </div>
            </div>
        </div>
    )
}

export default Item;