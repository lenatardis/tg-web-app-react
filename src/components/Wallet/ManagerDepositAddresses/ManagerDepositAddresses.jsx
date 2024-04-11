import styles from "./ManagerDepositAddresses.module.scss";
import Header from "../../Common/Header/Header";
import {useSelector} from "react-redux";
import {getSelectedCurrency, getSelectedNetwork, getWalletsForSelectedNetwork} from "../../../store/selectors";
import Item from "../Item/Item";
import Button from "../../Common/Button";
import {useEffect, useState} from "react";
import SettingsPopUp from "./SettingsPopup/Popup";

const ManagerDepositAddresses = () => {
    const walletsForSelectedNetwork = useSelector(getWalletsForSelectedNetwork);
    const network = useSelector(getSelectedNetwork);
    const currency = useSelector(getSelectedCurrency);
    const [settingsPopUp, setSettingsPopUp] = useState(false);
    const [selectedItem, setSelectedItem] = useState({name:'', address:'', index:''});

    const closeSettingsPopUp = () => {
        setSettingsPopUp(false);
        setSelectedItem({ name: '', address: '', index: '' });
    }

    const openSettingsPopUp = (item) => {
        let {name, index, address} = item;
        setSelectedItem({name, index, address});
        setSettingsPopUp(true);
    }

    useEffect(() => {
        if (settingsPopUp) {
            document.body.classList.add('noscroll');
        } else {
            document.body.classList.remove('noscroll');
        }

        return () => {
            document.body.classList.remove('noscroll');
        };
    }, [settingsPopUp]);

    return (
        <div className={styles.mdPage}>
            <Header back text="Manager deposit addresses"/>
            <div className="wrap">
                {
                    walletsForSelectedNetwork.map(({name, address}, index) => (
                        <Item key={index} name={name} address={address} network={network} currency={currency} index={index} openPopUp={() => openSettingsPopUp({address, index, name})} closePopUp={closeSettingsPopUp}/>
                    ))
                }
                <Button text="Request new address" handleClick={null}/>
                <SettingsPopUp isVisible={settingsPopUp} closePopUp={closeSettingsPopUp} name={selectedItem.name} address={selectedItem.address} index={selectedItem.index}/>
            </div>
        </div>
    )
}

export default ManagerDepositAddresses;