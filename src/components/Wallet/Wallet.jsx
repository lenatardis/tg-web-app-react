import styles from "./Wallet.module.scss";
import Header from "../Header/Header";

const Wallet = () => {
    return (
        <div>
            <Header back text="Wallet" menu />
            <div className={`${styles.main} wrap`}>
                <h2 className='title'>Wallet</h2>
            </div>
        </div>
    )
}

export default Wallet;