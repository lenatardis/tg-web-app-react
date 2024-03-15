import React from "react";
import Header from "../Common/Header/Header";
import Steps from "./Steps";
import DownloadLink from "../Common/MenuItem/MenuItem";
import Button from "./Button";
import styles from "./Verification.module.scss";
import {useNavigate} from "react-router-dom";

const Verification = () => {
    let navigate = useNavigate();
    const handleNextStep = () => {
        navigate('/verification/step2');
    };

    return (
        <div className="verification-page">
            <Header text="Two factor verification" back/>
            <div className={`${styles['vp-wrap']} wrap`}>
                <Steps step="1"/>
                <DownloadLink name="Download the app" url="/"/>
                <Button text="Enter" className={styles['vp-button']} handleClick={handleNextStep}/>
            </div>
        </div>
    )
}

export default Verification;