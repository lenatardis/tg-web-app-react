import React from 'react';
import styles from "./CurrencyList.module.scss";
import IconLoader from "../../assets/images/loading.svg";

const CurrencyList = ({cryptoCurrencies}) => {

    return (
        <div className={`${styles['currency-list']} wrap`}>
            {cryptoCurrencies && (
                cryptoCurrencies.map((item, index) =>
                    <div key={index}
                         className={`${styles['currency-list__item']}`}>
                        <div className={`${styles['title-block']}`}>
                            <img className={styles.image} src={item.icon} alt="{item.name}"/>
                            <div>
                                <p>{item.name}</p>
                                {index !== 0 && <p className={styles.addition}>USDT</p>}
                            </div>
                            {index === 0 && <img className={styles.loader} src={IconLoader} alt="loading"/>}
                        </div>
                        <div className={`${styles['value-block']}`}>
                            <div>
                                <p>{item.value}</p>
                                {item.value2 && (
                                    <p className={styles.addition}>{item.value2}</p>
                                )}
                            </div>
                            <span className={styles.fluctuation}>+0,73%</span>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default CurrencyList;
