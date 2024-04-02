import styles from "./Orders.module.scss";
import Header from "../../Common/Header/Header";
import NavLinks from "../../Common/NavLinks/NavLinks";
import useSubRoute from "../../../hooks/useSubRoute";
import PopUpLink from "../PopUpLink/PopUpLink";

const Orders = () => {
    let subroute = useSubRoute();
    return (
        <div>
            <Header back text="History"/>
            <div className="wrap">
                <NavLinks subroute={subroute} text1="Orders" link1="/history/orders" text2="Transactions" link2="/history/transactions"/>
                <div className={styles.linkBlock}>
                    <PopUpLink text="Filter"/>
                </div>
                <div className={styles.orderBlock}>

                </div>
            </div>
        </div>
    )
}

export default Orders;