import React, { useContext } from 'react'
import ThemeContext from '../../lib/context/ThemContext'
import Link from 'next/link'
import PhotoFrame from '../profile/PhotoFrame'

const ProfileCard = ({ style, className, href, as, data }) => {
  const { isDarkMode } = useContext(ThemeContext)
  /*
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
    <div className={className} style={style}>
      <div className="w-full h-full lg:max-w-full lg:flex">
        <div className="w-full h-full md:flex bg-white rounded-lg p-6">
          <img
            className="h-24 w-24 md:h-32 md:w-32 rounded-full mx-auto md:mx-0 md:mr-6"
            src={data.avatarUrl}
          />
          <div className="text-center md:text-left">
            <h2 className="inline text-lg">{data.username} </h2>
            <span className="text-purple-500">{data.displayName}</span>
            <div className="text-gray-600">{data.email}</div>
            <div className="text-gray-600">{data.profileUrl}</div>
            <div className="text-gray-600">{data.blog}</div>
            <div className="text-gray-600">
              {data.bio && data.bio.substring(0, 100)}...
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
