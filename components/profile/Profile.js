import React, { useContext } from 'react'
import ThemeContext from '../../lib/context/ThemContext'
import PhotoFrame from './PhotoFrame'
import Divder from '../commons/Divder'
import GitContributions from './GitContributions'
import Anchor from '../commons/Anchor'
import { RiFileEditLine } from 'react-icons/ri'
import Button from '../commons/Button'
import Markdown from '../commons/Markdown'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import { getIcon } from './TimeLineEdit'

const checkLink = url => {
  if (/^(https?|http?):\/\//g.test(url)) {
    return url
  } else {
    return `http://${url}`
  }
}

const Profile = ({ profileData, style, className, isEdit = false }) => {
  const { isDarkMode } = useContext(ThemeContext)

  /**
    id
    username
    displayName
    profileUrl
    avatarUrl
    email
    blog
    bio
   */

  return (
    <div style={style} className={className}>
      {isEdit && (
        <div className={'relative'}>
          <Button
            className={'absolute right-0 select-none'}
            href={'/[username]/edit'}
            as={`/${profileData.username}/edit`}
            value={
              <div className={'flex justify-center'}>
                <RiFileEditLine
                  className={'fill-current inline-block h-4 w-4 mt-auto mr-1'}
                />
                Edit Profile
              </div>
            }
          />
        </div>
      )}
      <div id="Profile" className="flex justify-center">
        <div className="flex flex-col w-full md:flex-row md:w-auto break-all">
          <PhotoFrame
            rounding
            img={profileData.avatarUrl}
            className="my-auto mx-auto m-5"></PhotoFrame>
          <div
            className={
              isDarkMode
                ? 'flex flex-col mx-auto lg:my-6 w-full md:w-auto max-w-xl md:max-w-md text-white'
                : 'flex flex-col mx-auto lg:my-6 w-full md:w-auto max-w-xl md:max-w-md text-gray-700'
            }>
            <h1 className="text-3xl font-bold lg:text-4xl text-center">
              {profileData.username}
            </h1>
            {profileData.username !== profileData.displayName && (
              <h2 className="text-2xl lg:text-3xl text-center">
                {profileData.displayName}
              </h2>
            )}
            <Divder color />
            <div>
              <div>
                <a
                  href={checkLink(profileData.profileUrl)}
                  target={'_blank'}
                  className={
                    isDarkMode
                      ? 'inline-block transform transition duration-150 ease-in-out text-white hover:text-gray-500 hover:translate-x-1'
                      : 'inline-block transform transition duration-150 ease-in-out text-gray-700 hover:text-gray-500 hover:translate-x-1'
                  }>
                  <span className={'font-bold'}>GitHub Link</span>:{' '}
                  {profileData.profileUrl}
                </a>
                {profileData.blog && (
                  <div>
                    <br />
                    <a
                      href={checkLink(profileData.blog)}
                      target={'_blank'}
                      className={
                        isDarkMode
                          ? 'inline-block transform transition duration-150 ease-in-out text-white hover:text-gray-500 hover:translate-x-1'
                          : 'inline-block transform transition duration-150 ease-in-out text-gray-700 hover:text-gray-500 hover:translate-x-1'
                      }>
                      <span className={'font-bold'}>Blog Link</span>:{' '}
                      {profileData.blog}
                    </a>
                  </div>
                )}
                {profileData.email && (
                  <div>
                    <br />
                    <a
                      href={`mailto:${profileData.email}`}
                      target={'_blank'}
                      className={
                        isDarkMode
                          ? 'inline-block transform transition duration-150 ease-in-out text-white hover:text-gray-500 hover:translate-x-1'
                          : 'inline-block transform transition duration-150 ease-in-out text-gray-700 hover:text-gray-500 hover:translate-x-1'
                      }>
                      <span className={'font-bold'}>Contact Email</span>:{' '}
                      {profileData.email}
                    </a>
                  </div>
                )}
                {profileData.tag && (
                  <div className={'flex flex-wrap my-2'}>
                    {profileData.tag.map((value, index) => (
                      <div
                        key={index}
                        className={`appearance-none inline-flex w-auto font-normal text-sm ${
                          isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                        } rounded-full  py-1 px-2 mr-1 mt-2 `}>
                        {value}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={isDarkMode ? 'text-white mx-auto' : 'text-gray-900 mx-auto'}>
        <div>
          <Anchor tag={'GitHub Contributions'} />
          <GitContributions
            className={'pt-3 flex justify-center'}
            githubId={profileData.username}
          />
        </div>
        <div>
          <Anchor tag={'Bio'} />
          <Markdown source={profileData.bio} />
        </div>
      </div>
      {profileData.timeLineFeilds &&
        profileData.timeLineFeilds.map((element, index) => (
          <div className={'overflow-hidden'} key={index}>
            <div className={isDarkMode ? 'text-white' : 'text-gray-700'}>
              <Anchor tag={element.title} />
            </div>
            <VerticalTimeline layout={'1-column'}>
              {element.timeLine.map((value, index) => (
                <VerticalTimelineElement
                  key={index}
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
              ))}
            </VerticalTimeline>
          </div>
        ))}
    </div>
  )
}

export default Profile
