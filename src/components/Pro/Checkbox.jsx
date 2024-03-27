import styles from "./Checkbox.module.scss";
import IconStar from "../../assets/images/star.svg";

const CheckBox = ({name, value, setChecked}) => {

    const handleChange = () => {
        setChecked(value);
    }

    return (
        <div className={styles.wrap}>
            <input type="checkbox" className={styles.checkbox} name={name} value={value} checked={!!value}
                   onChange={handleChange}/>
            <div>
                <img src={IconStar} alt=""/>
            </div>
        </div>
    );
};


export default CheckBox;