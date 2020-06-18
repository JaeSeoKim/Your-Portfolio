import React, { useContext } from 'react'
import ThemeContext from '../../lib/context/ThemContext'

const TextArea = ({
  className,
  style,
  label,
  placeholder,
  message,
  onChange = () => {},
  value,
  error,
  isLoading = false
}) => {
  const { isDarkMode } = useContext(ThemeContext)

  const handelChange = e => {
    onChange(e.target.value)
  }

  return (
    <div className={className} style={style}>
      <div className="w-full px-3 mb-6">
        <label
          className={`block uppercase tracking-wide ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          } text-xs font-bold mb-2`}>
          {label}
        </label>
        <textarea
          className={`appearance-none block w-full h-64 resize-none ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
          } placeholder-gray-600 ${
            isDarkMode ? 'text-white' : 'text-gray-700'
          } ${
            error && 'border border-red-500'
          }   rounded mt-2 py-3 px-4 leading-tight focus:outline-none ${
            isDarkMode ? 'focus:bg-gray-700' : 'focus:bg-white'
          } ${isLoading ? 'cursor-wait' : 'cursor-text'}`}
          onChange={handelChange}
          placeholder={placeholder}
          value={value}
          disabled={isLoading}
        />
        {isLoading && (
          <p className="text-blue-500 text-xs italic mt-1">Loading...</p>
        )}
        <p className="text-red-500 text-xs italic mt-1">{error && message}</p>
      </div>
    </div>
  )
}

export default TextArea
