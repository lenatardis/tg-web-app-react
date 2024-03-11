import React from "react";
import Header from "../Common/Header/Header";
import Steps from "./Steps";
import DownloadLink from "../Common/MenuItem/MenuItem";
import Button from "./Button";
import Copy from "./Copy";

const Verification_step2 = () => {

    return (
        <div className="verification-page">
            <Header text="Two factor verification" back/>
            <div className="wrap">
                <Steps step="2"/>
                <Copy/>
                <Button text="Enter" url="/verification/step3"/>
            </div>
        </div>
    )
}

export default Verification_step2;