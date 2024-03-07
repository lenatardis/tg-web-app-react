import React from 'react';
import styles from './MainLinks.module.scss';
import {Link} from "react-router-dom";

const MainLinks = () => {

    return (
        <div className={styles.mainLinks}>
            <Link to="/" className={styles.link}>link</Link>
            <Link to="/" className={styles.link}>link</Link>
            <Link to="/" className={styles.link}>link</Link>
        </div>
    );
};

export default MainLinks;
