import React from 'react';
import styles from "./Main.module.scss";

const TotalBlock = ({currency, total, sign}) => {

    return (
        <div className={`${styles['total-block']} wrap`}>
            <p>Total amount in wallets</p>
            <div className={`${styles['currency-block']}`}>
                <span className={styles.total}>{sign}{' '}{total}</span>
                <span className={styles.currency}>{currency.toUpperCase()}</span>
            </div>
        </div>
    );
};

export default TotalBlock;
