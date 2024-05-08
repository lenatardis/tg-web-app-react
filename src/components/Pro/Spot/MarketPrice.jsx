import styles from "../Pro.module.scss";
import React from "react";

const MarketPrice = ({title, currency, quantity, price, total}) => {
    return (
        <div className={`${styles['market-price']}`}>
            <div>
                <span>{title}</span>
                <span>{currency}</span>
            </div>
            <p>
                <span>≈</span>
                <span>
                    {quantity? quantity : (total? total : price)}
                </span>
            </p>
        </div>
    )
}
export default MarketPrice;