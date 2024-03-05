import styles from "./Navigation.module.scss";
import {useNavigate, Link, useLocation} from "react-router-dom";
import usePageName from "../../hooks/usePageName";
import IconHome from '../../icons/IconHome';
import IconWallet from '../../icons/IconWallet';
import IconPro from '../../icons/IconPro';
import IconManager from '../../icons/IconManager';
import IconHistory from '../../icons/IconHistory';


const Navigation = () => {
    let navigate = useNavigate();
    const currentPageName = usePageName();
    console.log(currentPageName);
    const isActive = (pageName) => {
        if (pageName === "" && currentPageName === "") return true;
        return currentPageName === pageName;
    };

    return (
        <div className={`${styles.navigation_bar}`}>
            <Link to="/" className={isActive("") ? styles.active : ""}>
                <IconHome className={`${styles.icon} ${isActive("") ? styles.activeIcon : ""}`}/>Home
            </Link>
            <Link to="/wallet" className={isActive("wallet") ? styles.active : ""}>
                <IconWallet className={`${styles.icon} ${isActive("wallet") ? styles.activeIcon : ""}`}/>Wallet
            </Link>
            <Link to="/pro" className={isActive("pro") ? styles.active : ""}>
                <IconPro className={`${styles.icon} ${isActive("pro") ? styles.activeIcon : ""}`}/>Pro
            </Link>
            <Link to="/manager" className={isActive("manager") ? styles.active : ""}>
                <IconManager className={`${styles.icon} ${isActive("manager") ? styles.activeIcon : ""}`}/>Manager
            </Link>
            <Link to="/history" className={isActive("history") ? styles.active : ""}>
                <IconHistory className={`${styles.icon} ${isActive("history") ? styles.activeIcon : ""}`}/>History
            </Link>
        </div>
    )
}

export default Navigation;