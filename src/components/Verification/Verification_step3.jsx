import React from "react";
import Header from "../Common/Header/Header";
import Steps from "./Steps";
import InputBlock from "./Input-block";
import Button from "./Button";

const Verification_step3 = () => {

    return (
        <div className="verification-page">
            <Header text="Two factor verification" back/>
            <div className="wrap">
                <Steps step="3"/>
                <InputBlock/>
                <Button text="Enter" url="/"/>
            </div>
        </div>
    )
}

export default Verification_step3;