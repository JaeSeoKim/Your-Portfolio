import React, { useContext } from 'react'
import {
  DiAndroid,
  DiAngularSimple,
  DiApple,
  DiCode,
  DiGo,
  DiJava,
  DiJsBadge,
  DiLinux,
  DiPython,
  DiPhp,
  DiReact,
  DiRuby,
  DiRust,
  DiStreamline
} from 'react-icons/di'
import { MdSchool, MdWork } from 'react-icons/md'
import ThemeContext from '../../lib/context/ThemContext'
const IconPicker = ({ style, className, onChange = () => {} }) => {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <div style={style} className={className}>
      <div className={'flex flex-wrap'}>
        <DiAndroid
          onClick={() => onChange('DiAndroid')}
          className={`transition duration-75 ease-in-out transform hover:scale-125 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } shadow fill-current w-8 h-8 p-1 mr-2 mb-4 my-auto rounded-full`}
        />
        <DiAngularSimple
          onClick={() => onChange('DiAngularSimple')}
          className={`transition duration-75 ease-in-out transform hover:scale-125 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } shadow fill-current w-8 h-8 p-1 mr-2 mb-4 my-auto rounded-full`}
        />
        <DiApple
          onClick={() => onChange('DiApple')}
          className={`transition duration-75 ease-in-out transform hover:scale-125 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } shadow fill-current w-8 h-8 p-1 mr-2 mb-4 my-auto rounded-full`}
        />
        <DiCode
          onClick={() => onChange('DiCode')}
          className={`transition duration-75 ease-in-out transform hover:scale-125 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } shadow fill-current w-8 h-8 p-1 mr-2 mb-4 my-auto rounded-full`}
        />
        <DiGo
          onClick={() => onChange('DiGo')}
          className={`transition duration-75 ease-in-out transform hover:scale-125 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } shadow fill-current w-8 h-8 p-1 mr-2 mb-4 my-auto rounded-full`}
        />
        <DiJava
          onClick={() => onChange('DiJava')}
          className={`transition duration-75 ease-in-out transform hover:scale-125 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } shadow fill-current w-8 h-8 p-1 mr-2 mb-4 my-auto rounded-full`}
        />
        <DiJsBadge
          onClick={() => onChange('DiJsBadge')}
          className={`transition duration-75 ease-in-out transform hover:scale-125 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } shadow fill-current w-8 h-8 p-1 mr-2 mb-4 my-auto rounded-full`}
        />
        <DiLinux
          onClick={() => onChange('DiLinux')}
          className={`transition duration-75 ease-in-out transform hover:scale-125 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } shadow fill-current w-8 h-8 p-1 mr-2 mb-4 my-auto rounded-full`}
        />
        <DiPython
          onClick={() => onChange('DiPython')}
          className={`transition duration-75 ease-in-out transform hover:scale-125 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } shadow fill-current w-8 h-8 p-1 mr-2 mb-4 my-auto rounded-full`}
        />
        <DiPhp
          onClick={() => onChange('DiPhp')}
          className={`transition duration-75 ease-in-out transform hover:scale-125 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } shadow fill-current w-8 h-8 p-1 mr-2 mb-4 my-auto rounded-full`}
        />
        <DiReact
          onClick={() => onChange('DiReact')}
          className={`transition duration-75 ease-in-out transform hover:scale-125 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } shadow fill-current w-8 h-8 p-1 mr-2 mb-4 my-auto rounded-full`}
        />
        <DiRuby
          onClick={() => onChange('DiRuby')}
          className={`transition duration-75 ease-in-out transform hover:scale-125 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } shadow fill-current w-8 h-8 p-1 mr-2 mb-4 my-auto rounded-full`}
        />
        <DiRust
          onClick={() => onChange('DiRust')}
          className={`transition duration-75 ease-in-out transform hover:scale-125 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } shadow fill-current w-8 h-8 p-1 mr-2 mb-4 my-auto rounded-full`}
        />
        <DiStreamline
          onClick={() => onChange('DiStreamline')}
          className={`transition duration-75 ease-in-out transform hover:scale-125 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } shadow fill-current w-8 h-8 p-1 mr-2 mb-4 my-auto rounded-full`}
        />
        <MdWork
          onClick={() => onChange('MdWork')}
          className={`transition duration-75 ease-in-out transform hover:scale-125 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } shadow fill-current w-8 h-8 p-1 mr-2 mb-4 my-auto rounded-full`}
        />
        <MdSchool
          onClick={() => onChange('MdSchool')}
          className={`transition duration-75 ease-in-out transform hover:scale-125 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } shadow fill-current w-8 h-8 p-1 mr-2 mb-4 my-auto rounded-full`}
        />
      </div>
    </div>
  )
}

export default IconPicker
