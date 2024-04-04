import styles from "./RadioButton.module.scss";

const RadioButton = ({name, value, onSelect, selected, inner}) => {

    const handleChange = () => {
        onSelect(value);
    }

    return (
        <div className={`${styles.wrap} ${inner ? styles.innerRadio : ''}`}>
            <input type="radio" className={styles.radio} name={name} value={value} checked={selected === value}
                   onChange={handleChange}/>
            <p>
                {inner && <span className={styles.valueBlock}>
                   <span className={styles.circle}></span>
                   <span>{value}</span>
               </span>}
                {!inner && value}
            </p>
        </div>
    );
};


export default RadioButton;