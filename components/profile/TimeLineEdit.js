import React, { useContext, useState } from 'react'
import ThemeContext from '../../lib/context/ThemContext'
import TextArea from '../commons/TextArea'
import { AiOutlineClose, AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai'
import { FiMinusCircle, FiMinus } from 'react-icons/fi'
import Input from '../commons/Input'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import Markdown from '../commons/Markdown'
import { CirclePicker } from 'react-color'
import IconPicker from './IconPicker'
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

export const getIcon = icon => {
  switch (icon) {
    case 'DiAndroid':
      return <DiAndroid className={'text-white'} />
    case 'DiAngularSimple':
      return <DiAngularSimple className={'text-white'} />
    case 'DiApple':
      return <DiApple className={'text-white'} />
    case 'DiCode':
      return <DiCode className={'text-white'} />
    case 'DiGo':
      return <DiGo className={'text-white'} />
    case 'DiJava':
      return <DiJava className={'text-white'} />
    case 'DiJsBadge':
      return <DiJsBadge className={'text-white'} />
    case 'DiLinux':
      return <DiLinux className={'text-white'} />
    case 'DiPython':
      return <DiPython className={'text-white'} />
    case 'DiPhp':
      return <DiPhp className={'text-white'} />
    case 'DiReact':
      return <DiReact className={'text-white'} />
    case 'DiRuby':
      return <DiRuby className={'text-white'} />
    case 'DiRust':
      return <DiRust className={'text-white'} />
    case 'DiStreamline':
      return <DiStreamline className={'text-white'} />
    case 'MdWork':
      return <MdWork className={'text-white'} />
    case 'MdSchool':
      return <MdSchool className={'text-white'} />
    default:
      return <DiCode />
  }
}

const TimeLineEdit = ({
  style,
  className,
  value,
  onChange = () => {},
  onDelete = () => {}
}) => {
  const [isEdit, setIsEdit] = useState(false)
  const { isDarkMode } = useContext(ThemeContext)
  const handelEdit = () => setIsEdit(!isEdit)
  const handelTitle = text => onChange({ ...value, title: text })
  const handelSubtitle = text => onChange({ ...value, subtitle: text })
  const handelValue = text => onChange({ ...value, value: text })

  return (
    <div className={className} style={style}>
      <div className={`relative py-2`}>
        <div className={'mt-8 mb-4 px-3'}>
          <VerticalTimelineElement
            contentStyle={{
              boxShadow:
                '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              borderTop: `2px solid ${value.color || '#f44336'}`
            }}
            icon={getIcon(value.icon)}
            iconStyle={{
              background: value.color || '#f44336'
            }}>
            <h3 className="text-xl font-semibold">{value.title}</h3>
            <h4 className="text-lg font-medium">{value.subtitle}</h4>
            <Markdown
              source={value.value}
              style={{ maxHeight: '16em', overflow: 'auto' }}
            />
          </VerticalTimelineElement>
        </div>
        <FiMinus
          onClick={() => {
            if (confirm('삭제 하시겠습니까?')) {
              onDelete()
            }
          }}
          className={`absolute right-0 top-0 pr-2 h-8 w-8 ${
            isDarkMode ? 'text-gray-100' : 'text-gray-800'
          } cursor-pointer`}
        />
        {isEdit && (
          <div className={'flex flex-wrap w-full'}>
            <div className={'p-2 w-full'}>
              <label
                className={`block uppercase tracking-wide ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                } text-xs font-bold`}>
                Color
                <CirclePicker
                  className={'mt-2'}
                  width={'auto'}
                  onChange={({ hex }) => onChange({ ...value, color: hex })}
                />
              </label>
            </div>
            <div className={'p-2 w-full'}>
              <label
                className={`block uppercase tracking-wide ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                } text-xs font-bold`}>
                Icon
                <IconPicker
                  className={'mt-2'}
                  onChange={icon => onChange({ ...value, icon })}
                />
              </label>
            </div>
            <Input
              label={'title'}
              className={`w-full md:w-1/2 px-2`}
              placeholder
              onChange={handelTitle}
              value={value.title}
              placeholder={'ex)Your-Portfolio 사이트 제작'}
            />
            <Input
              label={'sub title'}
              className={`w-full md:w-1/2 px-2`}
              placeholder
              onChange={handelSubtitle}
              value={value.subtitle}
              placeholder={'ex)2020-06-12 ~ present'}
            />
            <TextArea
              className={'w-full px-2'}
              label={'Inner Text'}
              value={value.value}
              onChange={handelValue}
              placeholder={'Markdown Support!'}
            />
          </div>
        )}
        <div className={'flex justify-end w-full mr-2 my-2'}>
          <div
            className={
              isDarkMode
                ? 'transform transition duration-150 ease-in-out hover:scale-105 bg-gray-800 hover:bg-purple-400 text-white text-xs px-4 md:px-6 py-2 rounded-full shadow-md cursor-pointer'
                : 'transform transition duration-150 ease-in-out hover:scale-105 bg-gray-100 hover:bg-indigo-400 text-gray-700 hover:text-white text-xs px-4 md:px-6 py-2 rounded-full shadow-md cursor-pointer'
            }
            onClick={handelEdit}>
            {isEdit ? 'Done' : 'Edit'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeLineEdit
