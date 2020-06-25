import React, { useContext, useState } from 'react'
import ThemeContext from '../../lib/context/ThemContext'
import TimeLineEdit from './TimeLineEdit'
import Input from '../commons/Input'
// import ReactMarkdown from 'react-markdown'

const TimeLineInput = ({
  style,
  className,
  value,
  onChange = () => {},
  onDelete = () => {}
}) => {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <div
      className={`${className} relative border-b-2 border-t-2 ${
        isDarkMode ? 'border-gray-700' : 'border-white'
      }`}
      style={style}>
      <div className={'absolute inline-flex right-0'}>
        <div
          onClick={() =>
            onChange({
              ...value,
              timeLine: value.timeLine.concat({
                color: '#f44336',
                icon: 'DiCode',
                title: '',
                subtitle: '',
                value: ''
              })
            })
          }
          className={`transform transition duration-150 ease-in-out hover:scale-105 ${
            isDarkMode
              ? 'bg-gray-800 hover:bg-purple-400'
              : 'bg-gray-100 hover:bg-indigo-400'
          }
          } ${
            isDarkMode ? 'text-white' : 'text-gray-700 hover:text-white'
          } text-xs px-2 py-1 mt-3 mr-2 rounded-full shadow-md cursor-pointer`}>
          Add TimeLine
        </div>
        <div
          onClick={() => {
            if (confirm('삭제 하시겠습니까?')) {
              onDelete()
            }
          }}
          className={`transform transition duration-150 ease-in-out hover:scale-105 ${
            isDarkMode
              ? 'bg-gray-800 hover:bg-red-600'
              : 'bg-gray-100 hover:bg-red-600'
          } hover:bg-red-600 ${
            isDarkMode ? 'text-white' : 'text-gray-700 hover:text-white'
          } text-xs px-2 py-1 mt-3 mr-2 rounded-full shadow-md cursor-pointer`}>
          Remove
        </div>
      </div>

      <Input
        className={'w-full my-6'}
        label={'title'}
        placeholder={'ex) Education'}
        type={'text'}
        onChange={title => onChange({ ...value, title })}
        value={value.title}
      />
      {value.timeLine.map((data, index) => (
        <TimeLineEdit
          key={index}
          className={'my-2'}
          value={data}
          onChange={changedData => {
            onChange({
              ...value,
              timeLine: value.timeLine
                .slice(0, index)
                .concat(
                  changedData,
                  value.timeLine.slice(index + 1, value.timeLine.length)
                )
            })
          }}
          onDelete={() =>
            onChange({
              ...value,
              timeLine: value.timeLine
                .slice(0, index)
                .concat(value.timeLine.slice(index + 1, value.timeLine.length))
            })
          }
        />
      ))}
    </div>
  )
}

export default TimeLineInput
