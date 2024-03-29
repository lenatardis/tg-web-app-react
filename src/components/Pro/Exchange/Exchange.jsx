import styles from "./Exchange.module.scss";
import Header from "../../Common/Header/Header";
import useSubRoute from "../../../hooks/useSubRoute";
import NavLinks from "../NavLinks";
import {useState} from "react";
import IconEtherium from "../../../assets/images/etherium.svg";
import IconBitcoin from "../../../assets/images/bitcoin.svg";
import IconUp from "../../../assets/images/up.svg";
import IconVerticalSwitch from "../../../assets/images/switch-vertical.svg";
import IconTether from "../../../assets/images/tether.svg";
import IconLitecoin from "../../../assets/images/litecoin.svg";

const cryptocurrencies = [
    {name: 'Etherium', src: IconEtherium, abbreviation: 'ETH'},
    {name: 'Bitcoin', src: IconBitcoin, abbreviation: 'BTC'},
    {name: 'Tether', src: IconTether, abbreviation: 'USDT'},
    {name: 'Litecoin', src: IconLitecoin, abbreviation: 'LTC'}
];

const Exchange = () => {
    let subroute = useSubRoute();
    const [selectedCrypto1, setSelectedCrypto1] = useState(cryptocurrencies[0]);
    const [selectedCrypto2, setSelectedCrypto2] = useState(cryptocurrencies[1]);
    const [dropDownOpen1, setDropDownOpen1] = useState(false);
    const [dropDownOpen2, setDropDownOpen2] = useState(false);

    const handleSelect1 = (crypto) => {
        setSelectedCrypto1(crypto);
        setDropDownOpen1(false);
    };

    const handleSelect2 = (crypto) => {
        setSelectedCrypto2(crypto);
        setDropDownOpen2(false);
    };

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
                                <div className={styles.dropdownWrap}>
                                    <div onClick={() => setDropDownOpen1(dropDownOpen1 => !dropDownOpen1)}>
                                        <img src={selectedCrypto1.src} alt="" className={`${styles['currency-img']}`}/>
                                        <span>{selectedCrypto1.name}</span>
                                        <button>
                                            <img src={IconUp} alt="" className={`${!dropDownOpen1 ? styles['icon-flipped'] : ''}`}/>
                                        </button>
                                    </div>
                                    {dropDownOpen1 && <ul className={styles.dropdownList}>
                                        {cryptocurrencies.map((crypto, index) => (
                                            <li key={index} onClick={() => handleSelect1(crypto)}>
                                                <img src={crypto.src} alt=""/>
                                                <span>{crypto.name}</span>
                                            </li>
                                        ))}
                                    </ul>}
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
                                <div className={styles.dropdownWrap}>
                                    <div onClick={() => setDropDownOpen2(dropDownOpen2 => !dropDownOpen2)}>
                                        <img src={selectedCrypto2.src} alt="" className={styles['currency-img']}/>
                                        <span>{selectedCrypto2.name}</span>
                                        <button>
                                            <img src={IconUp} alt="" className={`${!dropDownOpen2 ? styles['icon-flipped'] : ''}`}/>
                                        </button>
                                    </div>
                                    {dropDownOpen2 && <ul className={styles.dropdownList}>
                                        {cryptocurrencies.map((crypto, index) => (
                                            <li key={index} onClick={() => handleSelect2(crypto)}>
                                                <img src={crypto.src} alt="" className={`${styles['currency-img']} ${!dropDownOpen2 ? styles['icon-flipped'] : ''}`}/>
                                                <span>{crypto.name}</span>
                                            </li>
                                        ))}
                                    </ul>}
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