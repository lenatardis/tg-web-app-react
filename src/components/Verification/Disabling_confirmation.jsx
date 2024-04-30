import Header from "../Common/Header/Header";
import InputBlock from "./Input-block";
import Button from "../Common/Button";
import {useState} from "react";
import styles from "./Verification.module.scss";
import {useNavigate} from "react-router-dom";
import {setGoogleAuth} from "../../store/user-slice";
import {useDispatch} from "react-redux";

const Confirmation = () => {
    const [code, setCode] = useState('');
    const [error, setError] = useState(false);
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const handleValidation = () => {
        if (code.length < 6) {
            setError(true);
            return false;
        } else {
            setError(false);
            return true;
        }
    };

    const handleCodeChange = (value) => {
        setCode(value);
    };

    const handleNextStep = () => {
        if (handleValidation()) {
            dispatch(setGoogleAuth(false));
            navigate('/verification/switcher');
        }
    };

    return (
        <div className="verification-page">
            <Header text="Two factor verification" back/>
            <div className={`${styles['vp-wrap']} wrap`}>
                <InputBlock code={code} onCodeChange={handleCodeChange} error={error}/>
                <Button text="Enter" className={styles['vp-button']} handleClick={handleNextStep}/>
            </div>
        </div>
    )
}

export default Confirmation;