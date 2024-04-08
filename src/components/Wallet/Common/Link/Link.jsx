import styles from "./Link.module.scss";
import {Link} from "react-router-dom";

const LinkButton = ({title, src, img}) => {
    return (
        <Link className={styles.link} to={src}>
            <div>
                {title}
                {img && <img src={img} alt=""/>}
            </div>
        </Link>
    )
}

export default LinkButton;