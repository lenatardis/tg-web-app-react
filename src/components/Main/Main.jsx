import styles from "./Main.module.scss";
import Header from "./Header";

const Main = () => {
    return (
        <div>
            <Header back text="Main" menu/>
            <div className={`${styles.main} wrap`}>
                <h2 className='title'> Main</h2>
            </div>
        </div>
    )
}
export default Main;