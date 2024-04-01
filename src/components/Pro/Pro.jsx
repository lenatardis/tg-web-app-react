import Header from "../Common/Header/Header";
import useSubRoute from "../../hooks/useSubRoute";
import NavLinks from "../Common/NavLinks/NavLinks";

const Pro = () => {
    let subroute = useSubRoute();
    return (
        <div>
            <Header back text="Exchange" menu/>
            <div className="wrap">
                <NavLinks subroute={subroute} text1="Exchange" link1={'/pro/exchange'} text2="Spot" link2={'/pro/spot'}/>
            </div>
        </div>
    )
}

export default Pro;