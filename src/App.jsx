import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Main from "./components/Main/Main";
import Wallet from "./components/Wallet/Wallet";
import Pro from "./components/Pro/Pro";
import Manager from "./components/Manager/Manager";
import History from "./components/History/History";
import Navigation from "./components/Navigation/Navigation";
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
                {path: "wallet", element: <Wallet/>},
                {path: "wallet/:id", element: <Wallet/>},
                {path: "pro", element: <Pro/>},
                {path: "manager", element: <Manager/>},
                {path: "history", element: <History/>},
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
