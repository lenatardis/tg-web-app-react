import styles from "./Pro.module.scss";
import React from "react";

const MarketPrice = ({title}) => {
    return (
        <div className={`${styles['market-price']}`}>
            <div>
                <span>{title}</span>
                <span>EUR</span>
            </div>
            <p>
                <span>≈</span>
                <span>0.9154</span>
            </p>
        </div>
    )
}
export default MarketPrice;