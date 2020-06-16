import React, { useContext } from 'react'
import ReactTooltip from 'react-tooltip'
import ThemeContext from '../../lib/context/ThemContext'
import PhotoFrame from './PhotoFrame'
import Divder from '../commons/Divder'
import GitContributions from './GitContributions'
import Anchor from '../commons/Anchor'

const Profile = ({ profileData, style, className }) => {
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
      <div id="Profile" className="flex justify-center">
        <div className="flex flex-col md:flex-row">
          <PhotoFrame
            rounding
            img={profileData.avatarUrl}
            className="my-auto mx-auto"
          />
          <div
            className={
              isDarkMode
                ? 'flex flex-col lg:my-6 max-w-2xl text-white'
                : 'flex flex-col lg:my-6 max-w-2xl text-gray-700'
            }>
            <h1 className="text-3xl font-bold lg:text-4xl text-center">
              <a data-tip="GitHub ID!">{profileData.username}</a>
              <ReactTooltip
                type={isDarkMode ? 'dark' : 'light'}
                effect={'solid'}
                id={'githubID'}
              />
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
                  href={profileData.profileUrl}
                  target={'_blank'}
                  className={
                    isDarkMode
                      ? 'inline-block transform transition duration-150 ease-in-out text-white hover:text-gray-500 hover:translate-x-1'
                      : 'inline-block transform transition duration-150 ease-in-out text-gray-700 hover:text-gray-500 hover:translate-x-1'
                  }>
                  <span className={'font-bold'}>GitHub Link</span>:{' '}
                  {profileData.profileUrl}
                </a>
                {profileData.email && (
                  <div>
                    <br />
                    <a
                      href={profileData.blog}
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          isDarkMode
            ? 'text-white max-w-2xl mx-auto'
            : 'text-gray-700 max-w-2xl mx-auto'
        }>
        <div>
          <Anchor tag={'GitHud Contributions'} />
          <GitContributions
            className={'pt-3'}
            githubId={profileData.username}
          />
        </div>
        <div>
          <Anchor tag={'Bio'} />
          <div className="px-6 whitespace-pre break-words">
            {profileData.bio}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
