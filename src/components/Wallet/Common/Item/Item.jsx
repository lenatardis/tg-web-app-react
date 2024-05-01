import styles from "./Item.module.scss";
import IconArrow from "../../../../assets/images/arr-gr.svg";
import CopyItem from "../../../Common/CopyItem/CopyItem";
import IconPencil from "../../../../assets/images/pencil.svg";
import {useState} from "react";

const Item = ({name, address, network, currency, index, openPopUp, deposit, handleNavigation}) => {

    const [showDelete, setShowDelete] = useState(false);
    const [deleteButtonClicked, setDeleteButtonClicked] = useState(false);
    let touchTimeout;

    const handleTouchStart = () => {
        touchTimeout = setTimeout(() => {
            setShowDelete(true);
        }, 1000);
    };

    const handleTouchEnd = () => {
        clearTimeout(touchTimeout);
    };

    const handleTouchMove = () => {
        clearTimeout(touchTimeout);
    };

    const handleDeleteClick = (event) => {
        event.stopPropagation();
        console.log('Delete');
        setDeleteButtonClicked(true);
    };

    const handleItemClick = (e) => {
        alert(e.target);
        alert(!e.target.closest(`.${styles.deleteBtn}`));
        console.log(e.target);
        if (!e.target.closest(`.${styles.deleteBtn}`)) {
            setShowDelete(false);
        }
    };

    const shouldAttachHandlers = !currency && !deposit;

    const touchHandlers = shouldAttachHandlers ? {
        onTouchStart: handleTouchStart,
        onTouchEnd: handleTouchEnd,
        onTouchMove: handleTouchMove
    } : {};

    return (
        <div
            className={`${styles.itemWrap} ${currency ? styles.currencyWrap : ''} ${deposit ? styles.depositWrap : ''} ${showDelete ? styles.showDelete : ''}`}
            onClick={handleNavigation ? handleNavigation : (shouldAttachHandlers ? handleItemClick : null)} {...touchHandlers}>

            {showDelete && (
                <div className={`${styles.deleteBtn}`}>
                    <button onClick={handleDeleteClick}>Delete
                        {deleteButtonClicked && <span>Clicked!</span>}
                    </button>
                </div>
            )}
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