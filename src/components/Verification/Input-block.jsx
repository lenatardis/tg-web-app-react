import React from "react";
import verificationstyles from "./Verification.module.scss";
import styles from "./Input-block.module.scss";
import {useState} from "react";

const InputBlock = () => {
    const [code, setCode] = useState('');

    const handleNameChange = (e) => {
        let value = e.target.value;
        if (/^\d*$/.test(value)) {
            setCode(value);
        }
    }

    return (
        <div className={`${styles['input-block']} ${verificationstyles.block}`}>
            <label for="step3-code">Google Authenticator Verification Code</label>
            <input type="text" name="step3_code" id="step3-code" placeholder="6-digit code" value={code}
                   onChange={handleNameChange} maxlength="6"/>
        </div>
    )
}

export default InputBlock;
