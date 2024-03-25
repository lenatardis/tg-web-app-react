import styles from "./RadioButton.module.scss";

const RadioButton = ({name, value, onSelect, selected}) => {

    const handleChange = () => {
        onSelect(value);
    }

    return (
       <div className={styles.wrap}>
           <input type="radio" className={styles.radio} name={name} value={value} checked={selected === value} onChange={handleChange}/>
           <p>{value}</p>
       </div>
    );
};


export default RadioButton;