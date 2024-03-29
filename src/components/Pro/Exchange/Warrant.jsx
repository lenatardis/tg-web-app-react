import styles from "./Exchange.module.scss";
import Header from "../../Common/Header/Header";
import {getGiveCurrency, getGetCurrency} from "../../../store/selectors";
import {useSelector} from "react-redux";

const Warrant = () => {
    let give = useSelector(getGiveCurrency);
    let get = useSelector(getGetCurrency);

    return (
        <div>
            <Header back text="Exchange" menu/>
            <div className="wrap">
              <p>Warrant</p>
                <p>{give}</p>
                <p>{get}</p>
            </div>
        </div>
    )
}

export default Warrant;