import styles from "./PopUp.module.scss";

const PopUp = ({isVisible}) => {
    return (
        <div className={`${styles.popup} ${isVisible ? styles['popup-show'] : ''}`}>
            <p>popup</p>
        </div>
    )
}

export default PopUp;