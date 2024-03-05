import styles from "./History.module.scss";
import Header from "../Header/Header";

const History = () => {
    return (
        <div>
            <Header back text="History"/>
            <div className={`${styles.main} wrap`}>
                <h2 className='title'>History</h2>
            </div>
        </div>
    )
}

export default History;