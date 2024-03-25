import styles from "./Pro.module.scss";
import Header from "../Common/Header/Header";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import useSubRoute from "../../hooks/useSubRoute";
import NavLinks from "./NavLinks";
import IconTether from "../../assets/images/tether_min.svg";
import IconSelect from "../../assets/images/select.svg";
import React, {useState} from "react";
import RadioButton from "../Common/RadioButton/RadioButton";
import MarketPrice from "./MarketPrice";
import Button from "../Common/Button";

const Spot = () => {
    let subroute = useSubRoute();
    const [selectedOption1, setSelectedOption1] = useState('Buy');
    const [selectedOption2, setSelectedOption2] = useState('Market');
    const [selectedOption3, setSelectedOption3] = useState('Orders\' history');

    return (
        <div>
            <Header back text="Exchange" menu/>
            <div className="wrap">
                <NavLinks subroute={subroute}/>
                <div className={`${styles['row']} ${styles['main-row']}`}>
                    <span>
                        <img src={IconTether} alt=""/>
                        <span>USDT/EUR</span>
                        <span>344256.35</span>
                        <img src={IconSelect} alt=""/>
                    </span>
                    <RadioButton key="buy" name="option1" value="Buy" selected={selectedOption1}
                                 onSelect={setSelectedOption1}/>
                    <RadioButton key="sell" name="option1" value="Sell" selected={selectedOption1}
                                 onSelect={setSelectedOption1}/>
                </div>
                <div className={`${styles['row']} ${styles['ml-row']}`}>
                    <RadioButton key="Market" name="option2" value="Market" selected={selectedOption2}
                                 onSelect={setSelectedOption2}/>
                    <RadioButton key="Limit" name="option2" value="Limit" selected={selectedOption2}
                                 onSelect={setSelectedOption2}/>
                </div>
                <MarketPrice title={`${selectedOption2} price`} />
                <div className={styles.row}>
                    <MarketPrice title="Quantity"/>
                    <MarketPrice title="Total"/>
                </div>
                <div className={styles.balance}>
                    <span>Available balance</span>
                    <span>2,655.0498 USDT</span>
                </div>
                <div className={`${styles['btn-block']}`}>
                    {
                        selectedOption1 === "Buy" &&
                        <React.Fragment>
                            <p>Buy ~ 650.14363975 USDT for 593.3800 EUR
                                <span>at Market Price of ~ 0.9127 EUR</span>
                            </p>
                            <Button text="Buy USDT/EUR" className={styles['buy-btn']} handleClick={null}/>
                        </React.Fragment>
                    }
                    {selectedOption1 === "Sell" &&
                        <React.Fragment>
                            <p>Sell ~ 650.14363975 USDT for 593.3800 EUR
                                <span>at Market Price of ~ 0.9127 EUR</span>
                            </p>
                            <Button text="Sell USDT/EUR" className={styles['sell-btn']} handleClick={null}/>
                        </React.Fragment>
                    }
                </div>
                <div className={`${styles['row']} ${styles['order-row']}`}>
                    <RadioButton key="open_orders" name="option3" value="Open orders" selected={selectedOption3}
                                 onSelect={setSelectedOption3}/>
                    <RadioButton key="orders_history" name="option3" value="Orders' history" selected={selectedOption3}
                                 onSelect={setSelectedOption3}/>
                </div>
            </div>
        </div>
    )
}

export default Spot;