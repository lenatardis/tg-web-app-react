import styles from "./Exchange.module.scss";
import Header from "../../Common/Header/Header";
import useSubRoute from "../../../hooks/useSubRoute";
import NavLinks from "../NavLinks";
import React from "react";
import IconEtherium from "../../../assets/images/etherium.svg";
import IconBitcoin from "../../../assets/images/bitcoin.svg";
import IconUp from "../../../assets/images/up.svg";
import IconVerticalSwitch from "../../../assets/images/switch-vertical.svg";

const Exchange = () => {
    let subroute = useSubRoute();
    return (
        <div>
            <Header back text="Exchange" menu/>
            <div className="wrap">
                <NavLinks subroute={subroute}/>
                <div className={`${styles['exchange-wrap']}`}>
                    <div className={`${styles['exchange-block']}`}>
                        <div className={`${styles['exchange-block__item']}`}>
                            <div className={`${styles['title-row']}`}>
                                <h2>Give</h2>
                                <h2>Spot balanass ETH</h2>
                            </div>
                            <div>
                                <span className={`${styles['number']}`}>0.00</span>
                                <div>
                                    <img src={IconEtherium} alt="" className={`${styles['currency-img']}`}/>
                                    <span>Etherium</span>
                                    <button>
                                        <img src={IconUp} alt=""/>
                                    </button>
                                </div>
                            </div>
                            <div className={`${styles['availability-row']}`}>
                                <p>2,655.08984 ETH available</p>
                            </div>
                        </div>
                        <div className={`${styles['exchange-block__item']}`}>
                            <div className={`${styles['title-row']}`}>
                                <h2>Get</h2>
                                <h2>Spot balanass BTC</h2>
                            </div>
                            <div>
                                <span className={`${styles['number']}`}>0.00</span>
                                <div>
                                    <img src={IconBitcoin} alt="" className={`${styles['currency-img']}`}/>
                                    <span>Bitcoin</span>
                                    <button>
                                        <img src={IconUp} alt=""/>
                                    </button>
                                </div>
                            </div>
                            <div className={`${styles['availability-row']}`}>
                                <p>2,655.04 BTC available</p>
                            </div>
                        </div>
                        <button className={`${styles['switch-button']}`}>
                            <img src={IconVerticalSwitch} alt=""/>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Exchange;