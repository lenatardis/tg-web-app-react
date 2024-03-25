import styles from "./Pro.module.scss";
import React from "react";
import Button from "../Common/Button";
const BtnBlock = ({option}) => {

    return (
        <div className={`${styles['btn-block']}`}>
            {
                option === "Buy" &&
                <React.Fragment>
                    <p>Buy ~ 650.14363975 USDT for 593.3800 EUR
                        <span>at Market Price of ~ 0.9127 EUR</span>
                    </p>
                    <Button text="Buy USDT/EUR" className={styles['buy-btn']} handleClick={null}/>
                </React.Fragment>
            }
            {option === "Sell" &&
                <React.Fragment>
                    <p>Sell ~ 650.14363975 USDT for 593.3800 EUR
                        <span>at Market Price of ~ 0.9127 EUR</span>
                    </p>
                    <Button text="Sell USDT/EUR" className={styles['sell-btn']} handleClick={null}/>
                </React.Fragment>
            }
        </div>
    )
}

export default BtnBlock;