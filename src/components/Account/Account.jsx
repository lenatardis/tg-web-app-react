import styles from "./Account.module.scss";
import Header from "../Common/Header/Header";

const Account = () => {
    return (
        <div>
            <Header back text="History"/>
            <div className={`${styles.main} wrap`}>
                <h2 className='title'>Account</h2>
            </div>
        </div>
    )
}

export default Account;