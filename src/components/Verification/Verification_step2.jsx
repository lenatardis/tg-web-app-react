import React from "react";
import Header from "../Common/Header/Header";
import Steps from "./Steps";
import Button from "../Common/Button";
import Copy from "./Copy";
import styles from "./Verification.module.scss";
import {useNavigate} from "react-router-dom";

const Verification_step2 = () => {
    let navigate = useNavigate();
    const handleNextStep = () => {
        navigate('/verification/step3');
    };

    return (
        <div className="verification-page">
            <Header text="Two factor verification" back/>
            <div className={`${styles['vp-wrap']} wrap`}>
                <Steps step="2"/>
                <Copy/>
                <Button text="Enter" url="/verification/step3" className={styles['vp-button']}
                        handleClick={handleNextStep}/>
            </div>
        </div>
    )
}

export default Verification_step2;