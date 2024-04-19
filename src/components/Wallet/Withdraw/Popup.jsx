import {getCurrencyToWithdrawInfo} from "../../../store/selectors";
import {useSelector} from "react-redux";
import styles from "./Popup.module.scss";
import ClosePopUp from "../../Common/ClosePopUp/ClosePopUp";
import RadioButtonRow from "../../Common/RadioButtonRow/RadioButtonRow";

const WithdrawNetwork = ({closePopUp, isVisible, selected, onSelect}) => {

    let {name, networks = [], src} = useSelector(getCurrencyToWithdrawInfo) ?? {};

    return (
        <div className={`${styles.popup} ${isVisible ? styles['popup-show'] : ''}`}>
            <div className="resize">
                <div className="wrap">
                    <ClosePopUp close={closePopUp}/>
                    <h2>Select network</h2>
                    <div className={`${styles['popup__inner-wrap']}`}>
                        {
                            networks.map((el, index) => (
                                <RadioButtonRow name="selected_network" value={el} key={index} selected={selected} onSelect={onSelect} networkrow/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default WithdrawNetwork;