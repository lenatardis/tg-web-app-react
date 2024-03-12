import React from "react";
import verificationstyles from "./Verification.module.scss";
import styles from "./Input-block.module.scss";

const InputBlock = ({code, onCodeChange, error}) => {
    const handleNameChange = (e) => {
        let value = e.target.value;
        if (/^\d*$/.test(value)) {
            onCodeChange(value);
        }
    };

    const inputClassName = `${verificationstyles.block} ${styles['input-block']} ${error ? styles['input-block__error'] : ''}`;

    return (
        <div className={inputClassName}>
            <label for="step3-code">Google Authenticator Verification Code</label>
            <input type="text" name="step3_code" id="step3-code" placeholder="6-digit code" value={code}
                   onChange={handleNameChange} maxlength="6"/>
        </div>
    )
}

export default InputBlock;
