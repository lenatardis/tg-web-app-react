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
        if (pageName === "Main" && currentPageName === "") return true;
        return currentPageName === pageName;
    };

    const navigation = [
        {icon: IconMain, name: 'Main', url: '/'},
        {icon: IconWallet, name: 'Wallet', url: '/wallet'},
        {icon: IconPro, name: 'Pro', url: '/pro'},
        {icon: IconManager, name: 'Manager', url: '/manager'},
        {icon: IconHistory, name: 'History', url: '/history'},
    ]

    return (
            <div className="navigation-bar">
                <div className={`${styles.wrap} resize`}>
                    {navigation && (
                        navigation.map((item, index) =>
                            <Link key={index} to={item.url}
                                  className={`${styles['navigation-item']} ${isActive(item.name) ? styles['navigation-item__active'] : ""}`}>
                                <img className={styles.icon} src={item.icon} alt=""/>
                                <span>{item.name}</span>
                            </Link>
                        )
                    )}
                </div>
            </div>
    )
}
export default Navigation;