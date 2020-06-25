import React, { useState, useEffect } from 'react'
import Nav from './commons/Nav'
import ThemeContext from '../lib/context/ThemContext'
import ToggleButton from './commons/ToggleButton'
import Footer from './commons/Footer'

const Layout = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false)

  const toggleThemMode = e => {
    setDarkMode(e.currentTarget.checked)
    if (!isDarkMode) {
      localStorage.setItem('isDarkMode', 'true')
    } else {
      localStorage.setItem('isDarkMode', 'false')
    }
  }

  useEffect(() => {
    if (window) {
      try {
        const mode = localStorage.getItem('isDarkMode')
        if (mode === 'true') {
          setDarkMode(true)
        } else {
          setDarkMode(false)
        }
      } catch (error) {
        localStorage.setItem('isDarkMode', 'false')
      }
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleThemMode }}>
      <div
        className={'transform transition duration-150 ease-in-out'}
        style={
          isDarkMode ? { background: '#272C35' } : { background: '#E2E8F0' }
        }>
        <Nav />
        <div className={'container min-h-screen mx-auto p-4 md:p-6 '}>
          {children}
        </div>
        <Footer />
      </div>
      <ToggleButton
        onChange={toggleThemMode}
        checked={isDarkMode}
        className={'flex fixed bottom-0 right-0 pr-6 pb-6 select-none'}
      />
    </ThemeContext.Provider>
  )
}

export default Layout
