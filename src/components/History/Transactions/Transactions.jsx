import styles from "./Transactions.module.scss";
import Header from "../../Common/Header/Header";
import NavLinks from "../../Common/NavLinks/NavLinks";
import useSubRoute from "../../../hooks/useSubRoute";

const Transactions = () => {
    let subroute = useSubRoute();
    return (
        <div>
            <Header back text="History"/>
            <div className={`${styles.main} wrap`}>
                <NavLinks subroute={subroute} text1="Orders" link1="/history/orders" text2="Transactions" link2="/history/transactions"/>
                <p>Transactions</p>
            </div>
        </div>
    )
}

export default Transactions;