import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "../src/components/Header/Header";

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

    return (
        <div className="App">
            <Header/>
            <button onClick={onClose}>Закрити</button>
            <button onClick={onToggleButton}>toggle</button>
            <span>{id}</span>
        </div>
    );
}

export default App;
