import React from "react";
import styles from "./Button.module.scss";

import {useNavigate} from "react-router-dom";

const Button = ({text, url, onValidation}) => {

    let navigate = useNavigate();

    const handleClick = () => {
        if (!onValidation || (onValidation && onValidation())) {
            navigate(url);
        }
    };

    return (
        <button className={styles.button} onClick={handleClick}>
            <span>{text}</span>
        </button>
    )
}

export default Button;
