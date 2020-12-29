import React, {useState, useEffect, createContext} from 'react';

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState("dark");

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;