import styles from "./RadioButtonRow.module.scss";

const RadioButtonRow = ({name, value, text, onSelect, selected, src}) => {

    const handleChange = () => {
        onSelect(value);
    }

    return (
        <div className={styles.wrap}>
            <input type="radio" className={styles.radio} name={name} value={value} checked={selected === value} onChange={handleChange}/>
            <img src={src} alt=""/>
            <p>{text}</p>
            <span/>
        </div>
    );
};


export default RadioButtonRow;