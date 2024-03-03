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

    return (
        <div className="App">
            <Header/>
            <button onClick={onClose}>Закрити</button>
            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
}

export default App;
