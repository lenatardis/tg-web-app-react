import styles from "../Pro.module.scss";
import React from "react";

const Balance = () => {
    return (
        <div className={styles.balance}>
            <span>Available balance</span>
            <span>2,655.0498 USDT</span>
        </div>
    )
}

export default Balance;