import React from "react";
import styles from "./Button.module.scss";

const Button = ({text, url, onValidation, handleClick, className}) => {

    const buttonClasses = `${styles.button} ${className || ''}`.trim();

    return (
        <button className={buttonClasses} onClick={handleClick}>
            <span>{text}</span>
        </button>
    )
}

export default Button;
