import React from "react";
import styles from "./Verification.module.scss";
import IconCopy from '../../assets/images/copy.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Copy = () => {
    const code = 'AC72QNGSJOVN2W4N';
    return (
        <div className={`${styles['copy-block']} ${styles.block}`}>
            <p>{code}</p>
            <CopyToClipboard text={code}>
                <div className={`${styles['copy-icon-wrap']}`}>
                    <img src={IconCopy} alt=""/>
                </div>
            </CopyToClipboard>
        </div>
    )
}

export default Copy;
