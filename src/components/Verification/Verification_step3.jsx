import React from "react";
import Header from "../Common/Header/Header";
import Steps from "./Steps";
import InputBlock from "./Input-block";
import Button from "../Common/Button";
import {useState} from "react";
import styles from "./Verification.module.scss";
import {useNavigate} from "react-router-dom";

const Verification_step3 = () => {
    const [code, setCode] = useState('');
    const [error, setError] = useState(false);
    let navigate = useNavigate();

    const handleCodeChange = (value) => {
        setCode(value);
    };

    const handleValidation = () => {
        if (code.length < 6) {
            setError(true);
            return false;
        } else {
            setError(false);
            return true;
        }
    };

    const handleNextStep = () => {
        if (handleValidation()) {
            navigate('/');
        }
    };

    return (
        <div className="verification-page">
            <Header text="Two factor verification" back/>
            <div className={`${styles['vp-wrap']} wrap`}>
                <Steps step="3"/>
                <InputBlock code={code} onCodeChange={handleCodeChange} error={error}/>
                <Button text="Enter" className={styles['vp-button']} handleClick={handleNextStep}/>
            </div>
        </div>
    )
}

export default Verification_step3;