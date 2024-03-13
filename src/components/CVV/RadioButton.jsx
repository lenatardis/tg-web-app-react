import styles from "./RadioButton.module.scss";

const RadioButton = ({text, selected, onSelect}) => {

    return (
        <button
            className={`${styles.radioButton} ${selected ? styles.selected : ""}`}
            onClick={onSelect}
        >
            {text}
        </button>
    );
};


export default RadioButton;