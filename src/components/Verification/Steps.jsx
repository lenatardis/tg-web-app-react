import React from "react";
import styles from "./Steps.module.scss";

const Steps = ({step}) => {

    const totalSteps = 3;

    const isActive = (itemStep) => parseInt(step) >= itemStep;

    return (
        <div className={styles['steps-block']}>
            <h3>Download and install the Google app Authenticator</h3>
            <div className={styles['steps-row']}>
                {Array.from({length: totalSteps}, (_, i) => (
                    <React.Fragment key={i}>
                        <div
                            className={`${styles['steps-row__item']} ${isActive(i + 1) ? styles['steps-row__item__active'] : ""}`}>
                            <span>{i + 1}</span>
                        </div>
                        {i < totalSteps - 1 && <span className={styles.line}></span>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );

}

export default Steps;
