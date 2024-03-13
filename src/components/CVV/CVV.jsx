import styles from "./CVV.module.scss";
import Header from "../Common/Header/Header"
import {useState} from "react";
import RadioButton from "./RadioButton";

const CVV = () => {
    const [selectedOption1, setSelectedOption1] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);

    const handleOptionChange1 = (option) => {
        setSelectedOption1(option);
    };

    const handleOptionChange2 = (option) => {
        setSelectedOption2(option);
    };
    return (
        <div>
            <Header back text="CVV"/>
            <div className="wrap">
                <div className={styles.row}>
                    <RadioButton
                        text="Orders"
                        selected={selectedOption1 === "Orders"}
                        onSelect={() => handleOptionChange1("Orders")}
                    />
                    <RadioButton
                        text="Transactions"
                        selected={selectedOption1 === "Transactions"}
                        onSelect={() => handleOptionChange1("Transactions")}
                    />
                    <p>Selected option {selectedOption1}</p>
                </div>
                <div className={styles.row}>
                    <RadioButton
                        text="24h"
                        selected={selectedOption2 === "24h"}
                        onSelect={() => handleOptionChange2("24h")}
                    />
                    <RadioButton
                        text="Last 7d"
                        selected={selectedOption2 === "Last 7d"}
                        onSelect={() => handleOptionChange2("Last 7d")}
                    />
                    <RadioButton
                        text="Last 30d"
                        selected={selectedOption2 === "Last 30d"}
                        onSelect={() => handleOptionChange2("Last 30d")}
                    />
                    <p>Selected option {selectedOption2}</p>
                </div>
            </div>
        </div>
    )
}

export default CVV;