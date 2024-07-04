import React from "react";

 const ThemeContext = React.createContext({
    isBlueTheme: true,
    toggleTheme: () => {},
})
export default ThemeContext