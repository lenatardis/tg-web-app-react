import styles from "./History.module.scss";
import Header from "../Common/Header/Header";
import NavLinks from "../Common/NavLinks/NavLinks";
import useSubRoute from "../../hooks/useSubRoute";

const History = () => {
    let subroute = useSubRoute();
    return (
        <div>
            <Header back text="History"/>
            <div className="wrap">
               <NavLinks subroute={subroute} text1="Orders" link1="/history/orders" text2="Transactions" link2="/history/transactions"/>
            </div>
        </div>
    )
}

export default History;