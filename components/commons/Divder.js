import React, { useContext } from 'react'
import ThemeContext from '../../lib/context/ThemContext'
import { darkModeColor, whiteModeColor } from '../../lib/utils/constans'

const Divder = ({ vertical, color, id, style, className }) => {
  const { isDarkMode } = useContext(ThemeContext)
  return (
    <div style={style} className={className}>
      <div
        className={
          vertical ? 'h-full flex justify-center' : 'flex justify-center'
        }
        id={id}>
        <div
          className={
            vertical
              ? isDarkMode
                ? 'divder my-auto h-full w-2 my-2 bg-gray-800 rounded-full'
                : 'divder my-auto h-full w-2 my-2 bg-gray-100 rounded-full'
              : isDarkMode
              ? 'divder w-full h-2 my-2 bg-gray-800 rounded-full'
              : 'divder w-full h-2 my-2 bg-gray-100 rounded-full'
          }
          style={
            color
              ? vertical
                ? isDarkMode
                  ? {
                      background: `linear-gradient(180deg, ${darkModeColor.mainColor1} 0%, ${darkModeColor.mainColor2} 50%, ${darkModeColor.mainColor3} 100%)`
                    }
                  : {
                      background: `linear-gradient(180deg, ${whiteModeColor.mainColor1} 0%, ${whiteModeColor.mainColor2} 50%, ${whiteModeColor.mainColor3} 100%)`
                    }
                : isDarkMode
                ? {
                    background: `linear-gradient(270deg, ${darkModeColor.mainColor1} 0%, ${darkModeColor.mainColor2} 50%, ${darkModeColor.mainColor3} 100%)`
                  }
                : {
                    background: `linear-gradient(270deg, ${whiteModeColor.mainColor1} 0%, ${whiteModeColor.mainColor2} 50%, ${whiteModeColor.mainColor3} 100%)`
                  }
              : null
          }></div>
      </div>
    </div>
  )
}

export default Divder
