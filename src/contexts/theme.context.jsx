import { useState, createContext , useContext } from "react";
// dark in home
const ThemeContext = createContext('dark');

const useTheme = ()=> useContext(ThemeContext);

const ThemeProvider = ({children}) => {
    const [ theme , setTheme ] = useState('dark');
    const toggleTheme = ()=>{
        setTheme( theme === 'dark'?'light':'dark')
    }
    return (
        <ThemeContext.Provider  value={{theme,toggleTheme}}>
            {
                children
            }
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;

export {useTheme}