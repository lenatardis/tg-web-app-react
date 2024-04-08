import React from "react";
import styles from "./CopyItem.module.scss";
import IconCopy from '../../../assets/images/copy.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const CopyItem = ({code}) => {
    return (
        <CopyToClipboard text={code}>
            <div className={`${styles['copy-icon-wrap']}`}>
                <img src={IconCopy} alt=""/>
            </div>
        </CopyToClipboard>
    )
}

export default CopyItem;
