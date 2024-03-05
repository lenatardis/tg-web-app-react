import styles from "./Wallet.module.scss";
import Header from "../Header/Header";

const Wallet = () => {
    return (
        <div>
            <Header/>
            <div className={`${styles.main} title`}>
                <h2 className='title'>Wallet</h2>
            </div>
        </div>
    )
}

export default Wallet;