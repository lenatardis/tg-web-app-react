import styles from "./NavLinks.module.scss";
import {Link, useNavigate} from "react-router-dom";
import React from "react";

const NavLinks = ({subroute, text1, text2, link1, link2}) => {
    let navigate = useNavigate();

    return (
        <div className={styles['navlink-row']}>
            <Link className={`${styles['nav-link']} ${subroute === 'exchange' ? styles['nav-link__active'] : ""}`}
                  to={link1}>
                <span>{text1}</span>
            </Link>
            <Link className={`${styles['nav-link']} ${subroute === 'spot' ? styles['nav-link__active'] : ""}`}
                  to={link2}>
                <span>{text2}</span>
            </Link>
        </div>
    )
}

export default NavLinks;