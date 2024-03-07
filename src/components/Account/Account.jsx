import React from "react";
import styles from "./Account.module.scss";
import Header from "../Common/Header/Header";

import {useTelegram} from "../../hooks/useTelegram";
import IdRow from "./IdRow";
import MenuItem from "./MenuItem";

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
        {name: 'Two factor verification', url: '/'},
        {name: 'AML', url: '/'},
        {name: 'Information', url: '/'},
        {name: 'Support', url: '/'},
        {name: 'Language', url: '/'},
        {name: 'History CVV', url: '/'}
    ]

    return (
        <div>
            <Header back text="Account"/>
            <div className={`${styles['account-page']} wrap`}>
                <IdRow id={id}/>

                {menu && (
                    menu.map((item, index) =>
                        <MenuItem item={item}/>
                    )
                )}
            </div>
        </div>
    )
}

export default Account;