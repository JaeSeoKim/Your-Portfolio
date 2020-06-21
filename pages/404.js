import React, { useContext } from 'react'
import Link from 'next/link'
import ThemeContext from '../lib/context/ThemContext'

const Custom404 = () => {
  const { isDarkMode } = useContext(ThemeContext)
  return (
    <div className={'flex items-center justify-center mt-64'}>
      <div>
        <h1
          className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
          <span className={`font-bold`}>404</span> - Page Not Found
        </h1>
      </div>
    </div>
  )
}

export default Custom404
