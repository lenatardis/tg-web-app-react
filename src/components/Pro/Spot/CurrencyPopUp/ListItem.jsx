import styles from "./CurrencyPopUp.module.scss";
import React from "react";
import IconStar from "../../../../assets/images/star.svg";

const ListItem = ({text1, text2}) => {
    return (
        <div className={`${styles['list-item']}`}>
            <div>
                <div>
                    <img src={IconStar} alt=""/>
                    <span>{text1}</span>
                </div>
                <span>{text2}</span>
            </div>
        </div>
    )
}

export default ListItem;