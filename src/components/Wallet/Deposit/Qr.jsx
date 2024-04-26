import styles from "./Qr.module.scss";
import Header from "../../Common/Header/Header";
import {useSelector} from "react-redux";
import {
    getCurrencyToDepositInfo,
    getCurrencyToDepositNetwork,
    getWalletToDepositInfo
} from "../../../store/selectors";

import IconInfo from "../../../assets/images/info.svg";
import CopyItem from "../../Common/CopyItem/CopyItem";
import Button from "../../Common/Button";
import {useNavigate} from "react-router-dom";

const QrPage = () => {
    const { name : currencyName, src } = useSelector(getCurrencyToDepositInfo) ?? {};
    let selectedNetwork = useSelector(getCurrencyToDepositNetwork);
    let {name: walletName, address} = useSelector(getWalletToDepositInfo);

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(-1);
    }

    return (
        <div>
            <Header back text="Deposit" menu/>
            <div className="wrap">
                <div className={styles.currencyWrap}>
                    <div>
                        <img src={src} alt=""/>
                        <span>{currencyName}</span>
                    </div>
                    <span className={styles.networkWrap}>{selectedNetwork}</span>
                </div>
                <div className={styles.qrWrap}>
                    <div className={styles.qr}></div>
                </div>
                <div className={styles.infoBlock}>
                    <div>
                        <img src={IconInfo} alt=""/>
                    </div>
                    <div>
                        <span>
                            Send only {currencyName} on the {selectedNetwork} network<br/>to this address
                        </span>
                    </div>
                </div>
                <div className={styles.walletWrap}>
                    <div>
                        <div>
                            <p>{walletName}</p>
                            <p>{address}</p>
                        </div>
                        <CopyItem code={address}/>
                    </div>
                </div>
                <Button text="Change wallet" handleClick={handleNavigation} className={styles.btn}/>
            </div>
        </div>
    )
}

export default QrPage;