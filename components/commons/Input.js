import React, { useContext } from 'react'
import ThemeContext from '../../lib/context/ThemContext'

const Input = ({
  className,
  style,
  label,
  type,
  placeholder,
  message,
  onChange = () => {},
  value
}) => {
  const { isDarkMode } = useContext(ThemeContext)

  const handelChange = e => {
    onChange(e.target.value)
  }

  return (
    <div className={className} style={style}>
      <div>
        <label
          className={`block uppercase tracking-wide ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          } text-xs font-bold mb-2`}
          for="grid-first-name">
          {label}
        </label>
        <input
          className={`appearance-none block w-full ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
          } placeholder-gray-600 ${
            isDarkMode ? 'text-white' : 'text-gray-700'
          } ${
            isDarkMode ? 'border-gray-800' : 'border-gray-200'
          } rounded py-3 px-4 leading-tight focus:outline-none ${
            isDarkMode ? 'focus:bg-gray-700' : 'focus:bg-white'
          } ${isDarkMode ? 'focus:border-gray-500' : 'focus:border-white'}`}
          type={type}
          placeholder={placeholder}
          onChange={handelChange}
          value={value}
        />
        {message}
      </div>
    </div>
  )
}

export default Input
