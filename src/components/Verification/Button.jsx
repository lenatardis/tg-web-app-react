import React from "react";
import styles from "./Button.module.scss";

import {useNavigate} from "react-router-dom";

const Button = ({text, url}) => {

    let navigate = useNavigate();

    return (
        <button className={styles.button} onClick={() => navigate(`${url}`)}>
           <span>{text}</span>
        </button>
    )
}

export default Button;
