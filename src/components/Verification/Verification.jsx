import React from "react";
import Header from "../Common/Header/Header";
import Steps from "./Steps";
import DownloadLink from "../Common/MenuItem/MenuItem";
import Button from "./Button";

const Verification = () => {

    return (
        <div className="verification-page">
            <Header text="Two factor verification" back/>
            <div className="wrap">
                <Steps/>
                <DownloadLink name="Download the app" url ="/"/>
                <Button text="Enter"/>
            </div>
        </div>
    )
}

export default Verification;