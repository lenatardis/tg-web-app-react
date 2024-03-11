import React from 'react';
import styles from "./MenuItem.module.scss";
import IconArrRight from "../../../assets/images/arr-right.svg";
import {Link} from "react-router-dom";

const MenuItem = ({name, url}) => {

    return (
        <Link className={`${styles['menu-item']}`} to={url}>
            <span>{name}</span>
            <img src={IconArrRight} alt=""/>
        </Link>
    );
};

export default MenuItem;
