import styles from "./ManagerDepositAddresses.module.scss";
import Header from "../../Common/Header/Header";
import {useSelector} from "react-redux";
import {getSelectedCurrency, getSelectedNetwork, getWalletsForSelectedNetwork} from "../../../store/selectors";
import Item from "../Item/Item";
import Button from "../../Common/Button";
import {useEffect, useState} from "react";
import SettingsPopUp from "../SettingsAddressPopup/Popup";
import CreateWalletPopUp from "../CreateWalletPopup/Popup";

const ManagerDepositAddresses = () => {
    const walletsForSelectedNetwork = useSelector(getWalletsForSelectedNetwork);
    const network = useSelector(getSelectedNetwork);
    const currency = useSelector(getSelectedCurrency);
    const [settingsPopUp, setSettingsPopUp] = useState(false);
    const [selectedItem, setSelectedItem] = useState({name:'', address:'', index:''});
    const [createWalletPopUp, setCreateWalletPopUp] = useState(false);

    const openSettingsPopUp = (item) => {
        let {name, index, address} = item;
        setSelectedItem({name, index, address});
        setSettingsPopUp(true);
    }

    const closeSettingsPopUp = () => {
        setSettingsPopUp(false);
        setSelectedItem({ name: '', address: '', index: '' });
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

    return (
        <div className={styles.mdPage}>
            <Header back text="Manager deposit addresses"/>
            <div className="wrap">
                {
                    walletsForSelectedNetwork.map(({name, address}, index) => (
                        <Item key={index} name={name} address={address} network={network} currency={currency} index={index} openPopUp={() => openSettingsPopUp({address, index, name})} closePopUp={closeSettingsPopUp}/>
                    ))
                }
                <Button text="Request new address" handleClick={openCreateWalletPopUp}/>
                <SettingsPopUp isVisible={settingsPopUp} closePopUp={closeSettingsPopUp} name={selectedItem.name} address={selectedItem.address} index={selectedItem.index} network={network}/>
                <CreateWalletPopUp isVisible={createWalletPopUp} closePopUp={closeCreateWalletPopUp}/>
            </div>
        </div>
    )
}

export default ManagerDepositAddresses;