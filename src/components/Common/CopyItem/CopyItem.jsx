import React from "react";
import styles from "./CopyItem.module.scss";
import IconCopy from '../../../assets/images/copy.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const CopyItem = ({code}) => {
    const handleClick = (e) => {
        e.stopPropagation(); // This prevents the event from bubbling up to the parent
    };

    return (
        <CopyToClipboard text={code}>
            <div className={`${styles['copy-icon-wrap']}`} onClick={handleClick}>
                <img src={IconCopy} alt=""/>
            </div>
        </CopyToClipboard>
    )
}

export default CopyItem;
