import styles from "./Pro.module.scss";
import Header from "../Common/Header/Header";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import useSubRoute from "../../hooks/useSubRoute";
import NavLinks from "./NavLinks";
import IconTether from "../../assets/images/tether_min.svg";
import IconSelect from "../../assets/images/select.svg";
import React from "react";

const Spot = () => {
    let subroute = useSubRoute();
    return (
        <div>
            <Header back text="Exchange" menu/>
            <div className="wrap">
                <NavLinks subroute={subroute}/>
                <div className={styles.row}>
                    <span>
                        <img src={IconTether} alt=""/>
                        <span>USDT/EUR</span>
                        <span>344256.35</span>
                        <img src={IconSelect} alt=""/>
                    </span>
                    <span>Buy</span>
                    <span>Sell</span>
                </div>
                <p>Spot</p>
            </div>
        </div>
    )
}

export default Spot;