import styles from "./RadioButtonRow.module.scss";

const RadioButtonRow = ({name, value, onSelect, selected, src, networkrow}) => {

    const handleChange = () => {
        onSelect(value);
    }

    return (
        <div className={`${styles['wrap']} ${networkrow ? styles['networkRow'] : ''}`}>
            <input type="radio" className={styles.radio} name={name} value={value} checked={selected === value}
                   onChange={handleChange}/>
            {src && <img src={src} alt=""/>}
            <p>{value}</p>
            <span/>
        </div>
    );
};


export default RadioButtonRow;