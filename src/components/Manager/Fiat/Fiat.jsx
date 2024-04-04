import styles from "../Manager.module.scss";
import Header from "../../Common/Header/Header";
import useSubRoute from "../../../hooks/useSubRoute";
import NavLinks from "../../Common/NavLinks/NavLinks";

const Fiat = () => {
    let subroute = useSubRoute();
    return (
        <div>
            <Header back text="Manager" menu/>
            <div className="wrap">
                <NavLinks subroute={subroute} text1="Crypto" link1={'/manager/crypto'} text2="Fiat" link2={'/manager/fiat'}/>
                <p>Fiat</p>
            </div>
        </div>
    )
}

export default Fiat;