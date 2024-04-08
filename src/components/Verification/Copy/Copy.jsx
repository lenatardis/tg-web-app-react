import React from "react";
import styles from "./Copy.module.scss";
import CopyItem from "../../Common/CopyItem/CopyItem";

const Copy = ({code}) => {
    return (
        <div className={`${styles['copy-block']} ${styles.block}`}>
            <p>{code}</p>
            <CopyItem code={code}/>
        </div>
    )
}

export default Copy;
