import React, { useContext } from 'react'
import ThemeContext from '../../lib/context/ThemContext'
import PhotoFrame from './PhotoFrame'
import Divder from '../commons/Divder'

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
            <h1 className="text-3xl lg:text-4xl text-center">
              {profileData.displayName}
            </h1>
            {/* <h2 className="text-2xl lg:text-4xl text-center">
              {profileData.name_ko}
              {'\t'}({profileData.name_ch})
            </h2> */}
            <Divder color />
            <div className="px-4 whitespace-pre break-words">
              {profileData.bio}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
