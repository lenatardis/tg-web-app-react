import styles from "./Pro.module.scss";
import {Link, useNavigate} from "react-router-dom";
import React from "react";

const NavLinks = ({subroute}) => {
    let navigate = useNavigate();

    return (
        <div className={styles.row}>
            <Link className={`${styles['nav-link']} ${subroute === 'exchange' ? styles['nav-link__active'] : ""}`} to='/pro/exchange'>
                <span>Exchange</span>
            </Link>
            <Link className={`${styles['nav-link']} ${subroute === 'spot' ? styles['nav-link__active'] : ""}`} to='/pro/spot'>
                <span>Spot</span>
            </Link>
        </div>
    )
}

export default NavLinks;