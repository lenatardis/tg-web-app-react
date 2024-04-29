import React from 'react';
import styles from './Switcher.module.scss';

const Switcher = ({ isOn, toggleSwitch }) => {
    return (
        <div className={`${styles.switcher} ${isOn ? styles.on : styles.off}`} onClick={toggleSwitch}>
            <div className={styles.toggle}/>
        </div>
    )
};

export default Switcher;
