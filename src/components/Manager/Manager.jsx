import styles from "./Manager.module.scss";
import Header from "../Header/Header";

const Manager = () => {
    return (
        <div>
            <Header back text="Manager" menu/>
            <div className={`${styles.main} wrap`}>
                <h2 className='title'>Manager</h2>
            </div>
        </div>
    )
}

export default Manager;