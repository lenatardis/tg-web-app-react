import styles from "./ListItem.module.scss"
const ListItem = ({name, src, value, value2, handleClick}) => {
    return (
        <div className={styles.listItem} onClick={handleClick}>
            <div>
                <div className={styles.nameBlock}>
                    <img src={src} alt=""/>
                    <span>{name}</span>
                </div>
                <div className={styles.valueBlock}>
                    <span>{value}</span>
                    <span>{value2}</span>
                </div>
            </div>
        </div>
    )
}

export default ListItem;