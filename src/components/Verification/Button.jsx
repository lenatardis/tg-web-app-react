import React from "react";
import styles from "./Button.module.scss";

const Button = ({text}) => {

    return (
        <button className={styles.button}>
           <span>{text}</span>
        </button>
    )
}

export default Button;
