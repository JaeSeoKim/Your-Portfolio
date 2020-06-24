import React, { useContext, useState } from 'react'
import ThemeContext from '../../lib/context/ThemContext'
import TimeLineEdit from './TimeLineEdit'
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'
import { FiMinusCircle } from 'react-icons/fi'
import Button from '../commons/Button'
// import ReactMarkdown from 'react-markdown'

const TimeLineInput = ({ style, className, value, onChange = () => {} }) => {
  const [data, setData] = useState([])
  /**
   * { isEdit: false, date: null, icon: 0, title: '', subtitle: '', value: '' }
   */
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <div className={className} style={style}>
      <TimeLineEdit className={'my-2'} />
      <div
        className={`w-auto text-xl text-center ${
          isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
        } placeholder-gray-600 ${
          isDarkMode ? 'text-white' : 'text-gray-700'
        } rounded  py-1 px-2 mt-2 ${
          isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-white'
        } cursor-pointer`}>
        Add
      </div>
    </div>
  )
}

export default TimeLineInput
