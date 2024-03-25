import styles from "./Pro.module.scss";
import Header from "../Common/Header/Header";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import useSubRoute from "../../hooks/useSubRoute";
import NavLinks from "./NavLinks";
import React from "react";

const Exchange = () => {
    let subroute = useSubRoute();
    return (
        <div>
            <Header back text="Exchange" menu/>
            <div className="wrap">
                <NavLinks subroute={subroute}/>
                <p>Exchange</p>
            </div>
        </div>
    )
}

export default Exchange;