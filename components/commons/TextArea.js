import React, { useContext, useState } from 'react'
import Editor from 'react-simple-code-editor'
import ThemeContext from '../../lib/context/ThemContext'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-markdown'
import { DiCode } from 'react-icons/di'

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
  const [isFocus, setIsFocus] = useState(false)
  const [highlightSyntax, setHighlightSyntax] = useState(true)
  const { isDarkMode } = useContext(ThemeContext)

  const handelChange = e => {
    onChange(e.target.value)
  }

  return (
    <div className={className} style={style}>
      <div className="w-full mb-3 relative">
        <label
          className={`block uppercase tracking-wide ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          } text-xs font-bold mb-2`}>
          {label}
        </label>
        <Editor
          className={` appearance-none block w-full resize-none ${
            isFocus
              ? isDarkMode
                ? 'bg-gray-700'
                : 'bg-white'
              : isDarkMode
              ? 'bg-gray-800'
              : 'bg-gray-100'
          } placeholder-gray-600 ${
            isDarkMode ? 'text-white' : 'text-gray-700'
          } ${
            error && 'border border-red-500'
          } rounded mt-2 leading-tight focus:outline-none  ${
            isLoading ? 'cursor-wait' : 'cursor-text'
          }`}
          placeholder={placeholder}
          value={value}
          onValueChange={code => onChange(code)}
          textareaClassName={'textArea'}
          padding={'1rem'}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          highlight={code =>
            highlightSyntax
              ? highlight(code, languages.markdown, 'markdown')
              : code
          }
          style={{ minHeight: '16rem' }}
        />
        <div className={'absolute right-0'}>
          <div
            onClick={() => setHighlightSyntax(!highlightSyntax)}
            className={`transform -translate-y-10 transition duration-150 ease-in-out hover:scale-105 ${
              isDarkMode
                ? 'bg-gray-800 hover:bg-purple-400'
                : 'bg-gray-100 hover:bg-indigo-400'
            }
          } ${
            isDarkMode
              ? highlightSyntax
                ? 'text-yellow-400'
                : 'text-white'
              : highlightSyntax
              ? 'text-red-400'
              : 'text-gray-700 hover:text-white'
          } text-xs mr-2 rounded-full shadow-md cursor-pointer`}>
            <DiCode className={'fill-current h-8 w-8 my-auto'} />
          </div>
        </div>
        <style>{`
          .textArea::selection{
            background-color: highlight;
            color: transparent;
          }
        `}</style>
        {/* <textarea
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
          onKeyDown={handelKeyDown}
          placeholder={placeholder}
          value={value}
          disabled={isLoading}
        /> */}
        {isLoading && (
          <p className="text-blue-500 text-xs italic mt-1">Loading...</p>
        )}
        <p className="text-red-500 text-xs italic mt-1">{error && message}</p>
      </div>
    </div>
  )
}

export default TextArea
