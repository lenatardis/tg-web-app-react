import React from "react";
import Header from "../Common/Header/Header";
import styles from "./Switcher_page.module.scss";
import Switcher from "./Switcher";

const SwitcherPage = () => {

    return (
        <div className={styles.switcherPage}>
            <Header text="Two factor verification" back/>
            <div className={`wrap ${styles.switcherBlock}`}>
                <div className={styles.block}>
                    <div>
                        <h2>Telegram bot</h2>
                        <p>Protects your account and<br/>transactions, works through<br/>Telegram Bot @S WalletBot</p>
                    </div>
                    <div>
                        <Switcher/>
                    </div>
                </div>
                <div className={styles.block}>
                    <div>
                        <h2>Google Authenticator</h2>
                        <p>Protects your account and<br/>transactions</p>
                    </div>
                    <div>
                        <Switcher/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SwitcherPage;