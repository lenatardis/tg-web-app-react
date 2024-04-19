import Header from "../../Common/Header/Header";
import {getCurrencyToWithdrawNetwork} from "../../../store/selectors";
import {useSelector} from "react-redux";

const CurrencyToWithdraw = () => {
    return (
        <div>
            <Header back text="Withdraw" menu/>
            <div className="wrap">
                <p>Currency to withdraw</p>
                <p>Network {useSelector(getCurrencyToWithdrawNetwork)}</p>
            </div>
        </div>
    )
}

export default CurrencyToWithdraw;