import styles from "./Pro.module.scss";
import Header from "../Common/Header/Header";

const Pro = () => {
    return (
        <div>
            <Header back text="Pro" menu/>
            <div className={`${styles.main} wrap`}>
                <h2 className='title'>Pro</h2>
            </div>
        </div>
    )
}

export default Pro;