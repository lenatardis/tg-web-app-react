import styles from "./PopUpLink.module.scss";
import IconArrow from "../../../assets/images/arr-right.svg";

const PopUpLink = ({text}) => {
    return (
        <a className={styles.linkWrap}>
            <span>{text}</span>
            <img src={IconArrow}/>
        </a>
    )
}

export default PopUpLink;