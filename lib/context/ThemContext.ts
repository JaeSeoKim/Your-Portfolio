import React, { ChangeEvent } from "react"

const ThemeContext = React.createContext({
  isDarkMode: false,
  toggleThemMode: (e: ChangeEvent<HTMLInputElement>) => {},
})

export default ThemeContext
