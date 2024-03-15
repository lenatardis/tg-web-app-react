import styles from "./RadioButton.module.scss";

const RadioButton = ({name, value, onSelect, selected}) => {

    const handleChange = () => {
        onSelect(value);
    }

    return (
       <label className={styles.wrap}>
           <input type="radio" className={styles.radio} name={name} value={value} checked={selected === value} onChange={handleChange}/>
           <p>{value}</p>
       </label>
    );
};


export default RadioButton;