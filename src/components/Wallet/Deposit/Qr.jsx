import styles from "./Qr.module.scss";
import Header from "../../Common/Header/Header";

const QrPage = () => {
    return (
        <div>
            <Header back text="Deposit" menu/>
            <div className="wrap">
                <p>Scan here</p>
            </div>
        </div>
    )
}

export default QrPage;