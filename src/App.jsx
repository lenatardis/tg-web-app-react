import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Main from "./components/Main/Main";
import Account from "./components/Account/Account";
import Verification from "./components/Verification/Verification";
import Verification_step2 from "./components/Verification/Verification_step2";
import Verification_step3 from "./components/Verification/Verification_step3";
import Pro from "./components/Pro/Pro";
import CVV from "./components/CVV/CVV";
import Spot from "./components/Pro/Spot/Spot";
import Exchange from "./components/Pro/Exchange/Exchange";
import Warrant from "./components/Pro/Exchange/Warrant/Warrant";
import History from "./components/History/History";
import Orders from "./components/History/Orders/Orders";
import Transactions from "./components/History/Transactions/Transactions";
import Manager from "./components/Manager/Manager";
import Crypto from "./components/Manager/Crypto/Crypto";
import Fiat from "./components/Manager/Fiat/Fiat";
import Wallet from "./components/Wallet/AllCurrencies/Wallet";
import SelectedCurrencyWallet from "./components/Wallet/SelectedCurrency/SelectedCurrency";
import ManagerDepositAddresses from "./components/Wallet/ManagerDepositAddresses/ManagerDepositAddresses";
import Withdraw from "./components/Wallet/Withdraw/Withdraw";
import WithdrawCurrency from "./components/Wallet/Withdraw/Currency";
import Authenticator from "./components/Wallet/Withdraw/Authenticator";
import Layout from "./components/Layout/Layout";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './App.scss';

function App() {
    console.log(window.Telegram.WebApp);
    const {onToggleButton, onClose, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
        if (tg.expand) {
            tg.expand();
        }
    }, [])

    let id;
    if (typeof tg.initDataUnsafe === 'string') {
        let initData = JSON.parse(tg.initDataUnsafe);
        id = initData?.user?.id;
    } else {
        id = tg.initDataUnsafe?.user?.id;
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {index: true, element: <Main/>},
                {path: "history", element: <History/>},
                {path: "history/orders", element: <Orders/>},
                {path: "history/transactions", element: <Transactions/>},
                {path: "account", element: <Account/>},
                {path: "verification", element: <Verification/>},
                {path: "verification/step2", element: <Verification_step2/>},
                {path: "verification/step3", element: <Verification_step3/>},
                {path: "cvv", element: <CVV/>},
                {path: "pro", element: <Pro/>},
                {path: "pro/spot", element: <Spot/>},
                {path: "pro/exchange", element: <Exchange/>},
                {path: "pro/exchange/warrant", element: <Warrant/>},
                {path: "manager", element: <Manager/>},
                {path: "manager/crypto", element: <Crypto/>},
                {path: "manager/fiat", element: <Fiat/>},
                {path: "wallet", element: <Wallet/>},
                {path: "wallet/currency", element: <SelectedCurrencyWallet/>},
                {path: "wallet/managerdeposit", element: <ManagerDepositAddresses/>},
                {path: "wallet/withdraw", element: <Withdraw/>},
                {path: "wallet/withdraw/currency", element: <WithdrawCurrency/>},
                {path: "wallet/withdraw/authenticator", element: <Authenticator/>},
            ],
        },
    ]);

    return (
        <div className="resize main-content">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
