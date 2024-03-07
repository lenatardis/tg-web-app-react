import React from 'react';
import styles from "./IdRow.module.scss";
import IconAccount from "../../assets/images/account.svg";

const IdRow = ({id}) => {

    return (
        <div className={`${styles['id-line']}`}>
                    <span className={`${styles['icon-wrap']} ${styles['icon-account']}`}>
                        <img src={IconAccount} alt="account"/>
                    </span>
            <span className={styles.id}>ID {id}</span>
        </div>
    );
};

export default IdRow;
