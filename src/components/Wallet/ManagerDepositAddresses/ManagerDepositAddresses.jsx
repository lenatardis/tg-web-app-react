import styles from "./ManagerDepositAddresses.module.scss";
import Header from "../../Common/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrencyToDeposit,
    getCurrencyToDepositNetwork,
    getSelectedCurrency,
    getSelectedNetwork, getWalletsForCurrencyToDepositNetwork,
    getWalletsForSelectedNetwork
} from "../../../store/selectors";
import Item from "../Common/Item/Item";
import Button from "../../Common/Button";
import {useEffect, useState} from "react";
import SettingsPopUp from "../SettingPopup/Popup";
import CreateWalletPopUp from "../CreateWalletPopup/Popup";
import {useLocation, useNavigate} from "react-router-dom";
import {setWalletToDepositInfo} from "../../../store/user-slice";

const ManagerDepositAddresses = () => {
    const [settingsPopUp, setSettingsPopUp] = useState(false);
    const [selectedItem, setSelectedItem] = useState({name: '', address: ''});
    const [createWalletPopUp, setCreateWalletPopUp] = useState(false);

    const location = useLocation();
    const {type} = location.state || {};

    const wallets = type ? getWalletsForCurrencyToDepositNetwork : getWalletsForSelectedNetwork;
    const selectedNetwork = type ? getCurrencyToDepositNetwork : getSelectedNetwork;
    const selectedCurrency = type ? getCurrencyToDeposit : getSelectedCurrency;

    const walletsForSelectedNetwork = useSelector(wallets);
    const network = useSelector(selectedNetwork);
    const currency = useSelector(selectedCurrency);
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const openSettingsPopUp = (item) => {
        let {name, address} = item;
        setSelectedItem({name, address});
        setSettingsPopUp(true);
    }

    const closeSettingsPopUp = () => {
        setSettingsPopUp(false);
        setSelectedItem({name: '', address: ''});
    }

    const openCreateWalletPopUp = () => {
        setCreateWalletPopUp(true);
    }

    const closeCreateWalletPopUp = () => {
        setCreateWalletPopUp(false);
    }

    useEffect(() => {
        if (settingsPopUp || createWalletPopUp) {
            document.body.classList.add('noscroll');
        } else {
            document.body.classList.remove('noscroll');
        }

        return () => {
            document.body.classList.remove('noscroll');
        };
    }, [settingsPopUp, createWalletPopUp]);

    const handleNavigation = (item) => {
        dispatch(setWalletToDepositInfo(item));
        navigate('/wallet/deposit/qr');
    }

    return (
        <div className={styles.mdPage}>
            <Header back text="Manager deposit addresses"/>
            <div className="wrap">
                {
                    walletsForSelectedNetwork.map(({name, address}, index) => (
                        <Item key={index} name={name} address={address} network={network} currency={currency}
                              index={index} openPopUp={() => openSettingsPopUp({address, index, name})}
                              closePopUp={closeSettingsPopUp} deposit={type} {...(type ? { handleNavigation: () => handleNavigation({ address, name }) } : {})}/>
                    ))
                }
                <Button text="Request new address" handleClick={openCreateWalletPopUp}/>
                <SettingsPopUp isVisible={settingsPopUp} closePopUp={closeSettingsPopUp} name={selectedItem.name}
                               address={selectedItem.address}/>
                <CreateWalletPopUp isVisible={createWalletPopUp} closePopUp={closeCreateWalletPopUp} type={type}/>
            </div>
        </div>
    )
}

export default ManagerDepositAddresses;