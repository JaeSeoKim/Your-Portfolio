import React, { useContext, useState } from 'react'
import ThemeContext from '../../lib/context/ThemContext'
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'
import { FiPlus } from 'react-icons/fi'

const TagInput = ({
  style,
  className,
  isLoading,
  value,
  onChange = () => {}
}) => {
  const [input, setInput] = useState(false)
  const { isDarkMode } = useContext(ThemeContext)

  const handelNewTag = () => setInput(true)
  const handelCloseTag = () => setInput(false)
  const handelAddTagEnter = e => {
    if (!isLoading) {
      if (event.key === 'Enter') {
        if (e.target.value.replace(/(^\s*)|(\s*$)/g, '') !== '') {
          onChange(value.concat(e.target.value.replace(/(^\s*)|(\s*$)/g, '')))
        }
        setInput(false)
      }
    }
  }
  const handelAddTagBlur = e => {
    if (!isLoading) {
      if (e.target.value.replace(/(^\s*)|(\s*$)/g, '') !== '') {
        onChange(value.concat(e.target.value.replace(/(^\s*)|(\s*$)/g, '')))
      }
      setInput(false)
    }
  }

  const handelRemoveTag = index => {
    if (!isLoading) {
      onChange(
        value.slice(0, index).concat(value.slice(index + 1, value.length))
      )
    }
  }

  return (
    <div className={className} style={style}>
      <div>
        <label
          className={`block uppercase tracking-wide ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          } text-xs font-bold`}>
          {'Tag'}
          <div className={'flex-wrap'}>
            {value.map((value, index) => (
              <div
                key={index}
                className={`appearance-none inline-flex w-auto normal-case font-normal ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                } placeholder-gray-600 ${
                  isDarkMode ? 'text-white' : 'text-gray-700'
                } rounded  py-1 px-2 mr-1 mt-2 ${
                  isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-white'
                } ${isLoading ? 'cursor-wait' : 'cursor-text'}`}>
                {value}
                <span
                  onClick={() => handelRemoveTag(index)}
                  className={`my-auto ml-1 ${
                    isLoading ? 'cursor-not-allowed' : 'cursor-pointer'
                  }`}>
                  <AiOutlineClose className={'fill-current'} />
                </span>
              </div>
            ))}
            {input ? (
              <div
                className={`appearance-none inline-flex w-auto font-normal ${
                  isDarkMode ? 'bg-gray-700' : 'bg-white'
                } placeholder-gray-600 ${
                  isDarkMode ? 'text-white' : 'text-gray-700'
                } rounded  py-1 px-2 mt-2 ${
                  isLoading ? 'cursor-wait' : 'cursor-text'
                }`}>
                <input
                  className={`focus:outline-none w-16 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-white'
                  } `}
                  onBlur={handelAddTagBlur}
                  onKeyPress={handelAddTagEnter}
                />
                <span
                  onClick={handelCloseTag}
                  className={`my-auto ml-1 ${
                    isLoading ? 'cursor-not-allowed' : 'cursor-pointer'
                  }`}>
                  <AiOutlineCheck className={'fill-current'} />
                </span>
              </div>
            ) : (
              <div
                className={`appearance-none normal-case inline-flex w-auto font-normal ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                } placeholder-gray-600 ${
                  isDarkMode ? 'text-white' : 'text-gray-700'
                } rounded  py-1 px-2 mt-2 ${
                  isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-white'
                } ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                onClick={handelNewTag}>
                New Tag
                <FiPlus className={'fill-current my-auto ml-1'} />
              </div>
            )}
          </div>
        </label>

        {isLoading && (
          <p className="text-blue-500 text-xs italic mt-2">Loading...</p>
        )}
      </div>
    </div>
  )
}

export default TagInput
