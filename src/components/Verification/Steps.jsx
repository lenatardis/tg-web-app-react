import React from "react";
import styles from "./Steps.module.scss";

const Steps = () => {

    return (
        <div className={`${styles['steps-block']}`}>
            <h3>Download and install the Google app Authenticator</h3>
            <div className={`${styles['steps-row']}`}>
                <div className={`${styles['steps-row__item']} ${styles['steps-row__item__active']}`}>
                    <span>1</span>
                </div>
                <span className={styles.line}></span>
                <div className={`${styles['steps-row__item']}`}><span>2</span></div>
                <span className={styles.line}></span>
                <div className={`${styles['steps-row__item']}`}><span>3</span></div>
            </div>
        </div>
    )
}

export default Steps;
