import React from 'react';
import styles from "./Account.module.scss";
import IconArrRight from "../../assets/images/arr-right.svg";
import {Link} from "react-router-dom";

const MenuItem = ({item}) => {

    return (
        <Link className={`${styles['menu-item']}`} to={item.url}>
            <span>{item.name}</span>
            <img src={IconArrRight} alt=""/>
        </Link>
    );
};

export default MenuItem;
