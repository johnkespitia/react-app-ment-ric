import React, { createContext, useState } from "react";

export const Context = createContext()

const Provider = ({children}) => {
    const [darkMode, setDarkMode] = useState( window.localStorage.getItem('darkMode') !== 'true') 
       
    const value = {
        darkMode,
        toggleDarkMode: () => {
            setDarkMode(!darkMode)
            window.localStorage.setItem('darkMode', darkMode)
        }
    }
    return <Context.Provider value={value}>
        {children}
    </Context.Provider>
}

export default Provider