import React, { useContext, useState } from 'react'
import ThemeContext from '../../lib/context/ThemContext'
import TextArea from '../commons/TextArea'
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'
import { FiMinusCircle, FiMinus } from 'react-icons/fi'
import Input from '../commons/Input'
import ReactMarkdown from 'react-markdown'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import CodeBlock from '../commons/CodeBlock'
// import highlight from 'remark-highlight.js'

const TimeLineEdit = ({ style, className, value, onChange = () => {} }) => {
  const [data, setData] = useState({
    date: null,
    icon: 0,
    title: '',
    subtitle: '',
    value: ''
  })
  const [isEdit, setIsEdit] = useState(false)
  const { isDarkMode } = useContext(ThemeContext)
  const handelTitle = value => setData({ ...data, title: value })
  const handelSubtitle = value => setData({ ...data, subtitle: value })
  const handelValue = value => setData({ ...data, value: value })
  return (
    <div className={className} style={style}>
      <div
        className={`relative py-2 border-b-2 border-t-2 ${
          isDarkMode ? 'border-white' : 'border-gray-700'
        }`}>
        <div className={'mt-8 mb-4 px-3'}>
          <VerticalTimelineElement
            contentStyle={{
              boxShadow:
                '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              color: '#4a5568'
            }}
            icon={<div></div>}>
            <h3 className="text-xl font-semibold">{data.title}</h3>
            <h4 className="text-lg font-medium">{data.subtitle}</h4>
            <ReactMarkdown
              source={data.value}
              escapeHtml={false}
              renderers={{ code: CodeBlock }}
            />
            <style jsx global>{`
              blockquote {
                margin-left: 0px;
                margin-right: 0px;
                padding-left: 10px;
                padding-right: 10px;
                border-left: 2px solid #cbd5e0;
              }

              table {
                display: block;
                width: 100%;
                overflow: auto;
              }

              table th {
                font-weight: 600;
              }

              table td,
              table th {
                padding: 6px 13px;
                border: 1px solid #dfe2e5;
              }

              table tr {
                background-color: #fff;
                border-top: 1px solid #c6cbd1;
              }

              table tr:nth-child(2n) {
                background-color: #f6f8fa;
              }

              li {
                margin-left: 25px;
              }
              ul {
                list-style-type: circle;
              }

              ol {
                list-style-type: decimal;
              }

              code {
                padding: 0.2em 0.4em;
                margin: 0;
                font-size: 85%;
                background-color: rgba(27, 31, 35, 0.05);
                border-radius: 3px;
              }
            `}</style>
          </VerticalTimelineElement>
        </div>
        <FiMinus
          className={`absolute right-0 top-0 pr-2 h-8 w-8 ${
            isDarkMode ? 'text-white' : 'text-gray-700'
          } cursor-pointer`}
        />
        <div className={'flex flex-wrap w-full'}>
          <Input
            label={'title'}
            className={`w-1/2 px-2`}
            placeholder
            onChange={handelTitle}
            value={data.title}
          />
          <Input
            label={'sub title'}
            className={`w-1/2 px-2`}
            placeholder
            onChange={handelSubtitle}
            value={data.subtitle}
          />
          <TextArea
            className={'w-full px-2'}
            label={'Inner Text'}
            value={data.value}
            onChange={handelValue}
            placeholder={'Markdown Support!'}
          />
        </div>
        <div className={'flex justify-end w-full mr-2 my-2'}>
          <div
            className={
              isDarkMode
                ? 'transform transition duration-150 ease-in-out hover:scale-105 bg-gray-800 hover:bg-purple-400 text-white text-xs px-2 md:px-3 py-2 rounded-full shadow-md cursor-pointer'
                : 'transform transition duration-150 ease-in-out hover:scale-105 bg-gray-100 hover:bg-indigo-400 text-gray-700 hover:text-white text-xs px-2 md:px-3 py-2 rounded-full shadow-md cursor-pointer'
            }>
            {isEdit ? 'Save' : 'Edit'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeLineEdit
