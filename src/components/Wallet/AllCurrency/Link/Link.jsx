import styles from "./Link.module.scss";
import {Link} from "react-router-dom";
const LinkButton = ({title, src}) => {
    return (
        <Link className={styles.link} to={src}>
            {title}
        </Link>
    )
}

export default LinkButton;