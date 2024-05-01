import styles from "./Item.module.scss";
import IconArrow from "../../../../assets/images/arr-gr.svg";
import CopyItem from "../../../Common/CopyItem/CopyItem";
import IconPencil from "../../../../assets/images/pencil.svg";
import {useRef, useState} from "react";
import {useDispatch} from "react-redux";

const Item = ({
                  name, address, network, currency, index, openPopUp, deposit, handleNavigation,
                  showDeleteButton = () => {
                  },
                  hideDeleteButton = () => {
                  },
                  isDeleteButtonVisible = false,

                  handleItemClick = () => {
                  }

              }) => {

    let touchTimeout;
    /*  const touchStartPos = useRef({x: 0, y: 0});*/
    let dispatch = useDispatch();

    /*const [tempVisible, setTempVisible] = useState(false);*/

    const handleTouchStart = (e) => {
        /* touchStartPos.current = {x: e.touches[0].clientX, y: e.touches[0].clientY};*/
        touchTimeout = setTimeout(() => {
            showDeleteButton();
        }, 1500);
    };

    const handleTouchEnd = () => {
        clearTimeout(touchTimeout);
    };

    const handleTouchMove = (e) => {
        /*  const moveX = Math.abs(e.touches[0].clientX - touchStartPos.current.x);
          const moveY = Math.abs(e.touches[0].clientY - touchStartPos.current.y);*/
        /* if (moveX > 10 || moveY > 10) {
             clearTimeout(touchTimeout);
         }*/
        clearTimeout(touchTimeout);
    };

    /*const handleItemClick = (e) => {
        /!*  const isDeleteButton = e.target.closest(`.${styles.deleteBtn}`);
          if (!isDeleteButton) {
              hideDeleteButton();
          }*!/
    };*/

    const shouldAttachHandlers = !currency && !deposit;

    const touchHandlers = shouldAttachHandlers ? {
        onTouchStart: handleTouchStart,
        onTouchEnd: handleTouchEnd,
        onTouchMove: handleTouchMove
    } : {};

    return (
        <div
            className={`${styles.itemWrap} ${currency ? styles.currencyWrap : ''} ${deposit ? styles.depositWrap : ''} 
            ${isDeleteButtonVisible ? styles.showBtnWrap : ''}  ${shouldAttachHandlers ? styles.deletableWrap : ''}`}
            onClick={handleNavigation ? handleNavigation : (shouldAttachHandlers ? handleItemClick : null)} {...touchHandlers}>

            <div className={styles.titleRow}>
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