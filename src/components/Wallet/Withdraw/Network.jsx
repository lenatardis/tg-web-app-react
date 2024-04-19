import Header from "../../Common/Header/Header";
import {getCurrencyToWithdraw} from "../../../store/selectors";
import {useSelector} from "react-redux";

const WithdrawNetwork = () => {
    let currencyToWithdraw = useSelector(getCurrencyToWithdraw);
    return (
        <div>
            <Header back text="Withdraw" menu/>
            <div className="wrap">
                <p>Withdraw Network</p>
                <p>{currencyToWithdraw}</p>
            </div>
        </div>
    )
}

export default WithdrawNetwork;