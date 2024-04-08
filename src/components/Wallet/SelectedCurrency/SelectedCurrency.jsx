import Header from "../../Common/Header/Header";
import {getSelectedCurrencyWallet} from "../../../store/selectors";
import {useSelector} from "react-redux";
import CurrencyBlock from "../Common/CurrencyBlock/CurrencyBlock";

const SelectedCurrencyWallet = () => {

    let wallet = useSelector(getSelectedCurrencyWallet);
    let {name, commercial, warrants, balance, src} = wallet;

    return (
        <div>
            <Header back text="Wallet" menu/>
            <div className="wrap">
                <CurrencyBlock name={name} commercial={commercial} warrants={warrants} balance={balance} src={src}
                               handleClick={null} selected deposit/>
            </div>
        </div>
    )
}

export default SelectedCurrencyWallet;