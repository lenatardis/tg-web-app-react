import Header from "../../Common/Header/Header";
import {getSelectedCurrencyWallet} from "../../../store/selectors";
import {useSelector} from "react-redux";

const SelectedCurrencyWallet = () => {

    let wallet = useSelector(getSelectedCurrencyWallet);
    return (
        <div>
            <Header back text="Wallet" menu/>
            <div className="wrap">
                {wallet.name}
                {wallet.balance}

            </div>
        </div>
    )
}

export default SelectedCurrencyWallet;