import styles from "./PopUpLink.module.scss";
import IconArrow from "../../../assets/images/arr-right.svg";

const PopUpLink = ({text, open}) => {
    return (
        <a className={styles.linkWrap} onClick={open}>
            <span>{text}</span>
            <img src={IconArrow}/>
        </a>
    )
}

export default PopUpLink;