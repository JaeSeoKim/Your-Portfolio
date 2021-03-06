import React, { useContext } from 'react'
import ThemeContext from '../lib/context/ThemContext'
import Link from 'next/link'

const temp = ({ style, className, href, as, value }) => {
  const { isDarkMode } = useContext(ThemeContext)
  return (
    <div className={className} style={style}>
      <Link href={href} as={as}>
        <div
          className={
            isDarkMode
              ? 'bg-gray-700 hover:bg-purple-400 text-white text-xs px-2 md:px-3 py-2 rounded-full shadow-md cursor-pointer'
              : 'bg-white hover:bg-indigo-400 text-gray-700 hover:text-white text-xs px-2 md:px-3 py-2 rounded-full shadow-md cursor-pointer'
          }>
          {value}
        </div>
      </Link>
    </div>
  )
}

export default temp
