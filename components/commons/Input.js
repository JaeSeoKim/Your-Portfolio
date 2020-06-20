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
      <div>
        <label
          className={`block uppercase tracking-wide ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          } text-xs font-bold`}>
          {label}
          <input
            className={`appearance-none block w-full ${
              isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
            } placeholder-gray-600 ${
              isDarkMode ? 'text-white' : 'text-gray-700'
            } ${
              error && 'border border-red-500'
            }   rounded mt-2 py-3 px-4 leading-tight focus:outline-none ${
              isDarkMode ? 'focus:bg-gray-700' : 'focus:bg-white'
            } ${isLoading ? 'cursor-wait' : 'cursor-text'}`}
            type={type}
            placeholder={placeholder}
            onChange={handelChange}
            value={value}
            disabled={isLoading}
            // onSubmit={e => event.preventDefault()}
          />
        </label>
        {isLoading && (
          <p className="text-blue-500 text-xs italic mt-1">Loading...</p>
        )}
        <p className="text-red-500 text-xs italic mt-1">{error && message}</p>
      </div>
    </div>
  )
}

export default Input
