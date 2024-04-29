import React, {useState} from 'react';
import styles from './Switcher.module.scss';

const Switcher = () => {
    const [isOn, setIsOn] = useState(true);

    const toggleSwitch = () => setIsOn(!isOn);

    return (
        <div className={`${styles.switcher} ${isOn ? styles.on : styles.off}`} onClick={toggleSwitch}>
            <div className={styles.toggle}/>
        </div>
    )
};

export default Switcher;
