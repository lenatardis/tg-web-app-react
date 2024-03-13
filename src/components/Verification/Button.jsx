import React from "react";
import styles from "./Button.module.scss";

import {useNavigate} from "react-router-dom";

const Button = ({text, url, onValidation, className}) => {

    let navigate = useNavigate();

    const handleClick = () => {
        if (!onValidation || (onValidation && onValidation())) {
            navigate(url);
        }
    };

    const buttonClasses = `${styles.button} ${className || ''}`.trim();

    return (
        <button className={buttonClasses} onClick={handleClick}>
            <span>{text}</span>
        </button>
    )
}

export default Button;
