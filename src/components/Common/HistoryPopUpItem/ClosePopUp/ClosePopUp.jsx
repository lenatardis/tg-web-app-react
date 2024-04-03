import styles from "./ClosePopUp.module.scss";
import IconClose from "../../../../assets/images/close.svg";
import React from "react";

const ClosePopUp = ({close}) => {

    return (
        <div className={styles.close}>
            <button onClick={close}>
                <img src={IconClose} alt=""/>
            </button>
        </div>
    )
}

export default ClosePopUp;