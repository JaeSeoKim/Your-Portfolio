import React, { useState, ChangeEvent, useEffect } from "react"
import Nav from "./Nav"
import ThemeContext from "lib/context/ThemContext"
import ToggleButton from "./ToggleButton"
import Footer from "./Footer"

type Props = {
  user?: string
}

const Layout: React.FunctionComponent<Props> = ({ children, user }) => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false)

  const toggleThemMode = (e: ChangeEvent<HTMLInputElement>) => {
    setDarkMode(e.currentTarget.checked)
    if (!isDarkMode) {
      localStorage.setItem("isDarkMode", "true")
    } else {
      localStorage.setItem("isDarkMode", "false")
    }
  }

  useEffect(() => {
    if (window) {
      try {
        const mode = localStorage.getItem("isDarkMode")
        if (mode === "true") {
          setDarkMode(true)
        } else {
          setDarkMode(false)
        }
      } catch (error) {
        localStorage.setItem("isDarkMode", "false")
      }
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleThemMode }}>
      <div
        style={
          isDarkMode ? { background: "#272C35" } : { background: "#E2E8F0" }
        }
      >
        <Nav user={user} />
        <div className={"container min-h-screen mx-auto p-6 "}>
          {children}
          <ToggleButton
            onChange={toggleThemMode}
            checked={isDarkMode}
            className={"flex fixed bottom-0 right-0 pr-6 pb-6 select-none"}
          />
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default Layout
