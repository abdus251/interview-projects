import useLocalStorage from "./useLocalStorage";
import './theme.css';
import { useEffect } from "react";

export default function LightDarkMode() {

    const [theme, setTheme] = useLocalStorage('theme', "dark")
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);


    function handleToggleTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    console.log(theme)

    return (
        <div className="light-dark-mode">
            <div className="container">
                <p>Hello World !</p>
                <button onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    )
}