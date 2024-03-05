import styles from "./Navigation.module.scss";
import {useNavigate, Link, useLocation} from "react-router-dom";
import usePageName from "../../hooks/usePageName";
import IconMain from '../../assets/images/main.svg';
import IconWallet from '../../assets/images/wallet.svg';
import IconPro from '../../assets/images/pro.svg';
import IconManager from '../../assets/images/manager.svg';
import IconHistory from '../../assets/images/history.svg';


const Navigation = () => {
    let navigate = useNavigate();
    const currentPageName = usePageName();
    console.log(currentPageName);

    const isActive = (pageName) => {
        if (pageName === "main" && currentPageName === "") return true;
        return currentPageName === pageName;
    };

    const navigation = [
        {icon: IconMain, name: 'main', url: '/'},
        {icon: IconWallet, name: 'wallet', url: '/wallet'},
        {icon: IconPro, name: 'pro', url: '/pro'},
        {icon: IconManager, name: 'manager', url: '/manager'},
        {icon: IconHistory, name: 'history', url: '/history'},
    ]

    return (
        <div className={`${styles['navigation-bar']}`}>
            {navigation && (
                navigation.map((item, index) =>
                    <Link key={index} to={item.url}  className={`${styles['navigation-item']} ${isActive(item.name) ? styles['navigation-item__active'] : ""}`}>
                        <img className={styles.icon} src={item.icon} alt=""/>
                        <span>{item.name}</span>
                    </Link>
                )
            )}
        </div>
    )
}
export default Navigation;