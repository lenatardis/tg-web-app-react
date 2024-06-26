import React from "react";
import styles from "./Button.module.scss";

const Button = ({text, handleClick, className = '', disabled}) => {
    const buttonClasses = `${styles.button} ${className}`.trim();

    return (
        <button className={buttonClasses} onClick={handleClick} disabled={disabled}>
            <span>{text}</span>
        </button>
    )
}

export default Button;
