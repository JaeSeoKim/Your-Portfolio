import React, { useState, useEffect, useContext } from 'react'
import Nav from './commons/Nav'
import ThemeContext from '../lib/context/ThemContext'
import ToggleButton from './commons/ToggleButton'
import Footer from './commons/Footer'
import Title from './Home/TItle'

const Layout = ({ children, nav, index }) => {
  const { isDarkMode, toggleThemMode } = useContext(ThemeContext)

  return (
    <>
      <div
        className={'transform transition duration-300 ease-in-out'}
        style={
          isDarkMode ? { background: '#272C35' } : { background: '#E2E8F0' }
        }>
        <Nav nav={nav && nav} index={index && index} />
        <div
          className={`container ${
            !index && 'min-h-screen'
          } mx-auto p-4 md:p-6 `}>
          {children}
        </div>
        <Footer />
      </div>
      <ToggleButton
        onChange={toggleThemMode}
        checked={isDarkMode}
        className={'flex fixed bottom-0 right-0 pr-6 pb-6 select-none'}
      />
    </>
  )
}

export default Layout
