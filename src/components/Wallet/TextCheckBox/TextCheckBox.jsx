import styles from "./TextCheckBox.module.scss";

const TextRadioButton = ({name, onSelect, selected, text}) => {

    const handleChange = () => {
        onSelect(!selected);
    }

    return (
        <div className={styles.wrap}>
            <input type="checkbox" className={styles.checkBox} name={name} checked={selected}
                   onChange={handleChange}/>
            <div className={styles.valueBlock}>
                <span className={styles.circle}/>
                <span>{text}</span>
            </div>
        </div>
    );
};

export default TextRadioButton;
