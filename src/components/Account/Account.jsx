import React from "react";
import styles from "./Account.module.scss";
import Header from "../Common/Header/Header";

import {useTelegram} from "../../hooks/useTelegram";
import IdRow from "./IdRow";
import MenuItem from "../Common/MenuItem/MenuItem";

const Account = () => {
    const {tg} = useTelegram();

    let id;
    if (typeof tg.initDataUnsafe === 'string') {
        let initData = JSON.parse(tg.initDataUnsafe);
        id = initData?.user?.id;
    } else {
        id = tg.initDataUnsafe?.user?.id;
    }

    const menu = [
        {name: 'Safety', url: '/'},
        {name: 'Two factor verification', url: '/verification'},
        {name: 'AML', url: '/'},
        {name: 'Information', url: '/'},
        {name: 'Support', url: '/'},
        {name: 'Language', url: '/'},
        {name: 'History CVV', url: '/cvv'}
    ]

    return (
        <div className="account-page">
            <Header back text="Account"/>
            <div className={`${styles['account-wrap']} wrap`}>
                <IdRow id={id}/>

                {menu && (
                    menu.map((item, index) =>
                        <MenuItem key={index} name={item.name} url={item.url}/>
                    )
                )}
            </div>
        </div>
    )
}

export default Account;