import styles from "./ListItem.module.scss";
import IconUp from "../../../assets/images/green_arr.svg";
import IconDown from "../../../assets/images/red_arr.svg";

const ListItem = ({name, value, date, time}) => {
    return (
        <div className={styles.listItem}>
            <div className={styles.mainRow}>
                <div>
                    <img src={value[0] === "-" ? IconUp : IconDown} alt=""/>
                    <span>{name}</span>
                </div>
                <span>{value}</span>
            </div>
            <div className={styles.dateRow}>
                <span>{date}</span>
                <span>{time}</span>
            </div>
        </div>
    )
}

export default ListItem;