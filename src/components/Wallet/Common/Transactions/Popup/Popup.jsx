import {getCurrencyToDepositInfo, getCurrencyToWithdrawInfo} from "../../../../../store/selectors";
import {useSelector} from "react-redux";
import styles from "./Popup.module.scss";
import ClosePopUp from "../../../../Common/ClosePopUp/ClosePopUp";
import RadioButtonRow from "../../../../Common/RadioButtonRow/RadioButtonRow";

const TransactionsNetworkPopUp = ({closePopUp, isVisible, selected, onSelect, deposit}) => {

    const getInfo = deposit ? getCurrencyToDepositInfo : getCurrencyToWithdrawInfo;
    const { name, networks = [], src } = useSelector(getInfo) ?? {};

    return (
        <div className={`${styles.popup} ${isVisible ? styles['popup-show'] : ''}`}>
            <div className="resize">
                <div className="wrap">
                    <ClosePopUp close={closePopUp}/>
                    <div className={`${styles.currencyWrap} ${styles.block}`}>
                        <div>
                            <img src={src} alt=""/>
                            <p>{name !== 'USDT' ? name : 'Tether USD'}</p>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <h2>Select network</h2>
                        <div className={`${styles['popup__inner-wrap']}`}>
                            {
                                networks.map((el, index) => (
                                    <RadioButtonRow name="selected_network" value={el} key={index} selected={selected}
                                                    onSelect={onSelect} networkrow/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TransactionsNetworkPopUp;