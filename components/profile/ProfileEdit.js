import React, { useContext } from 'react'
import ThemeContext from '../../lib/context/ThemContext'
import PhotoFrame from './PhotoFrame'
import Divder from '../commons/Divder'
import GitContributions from './GitContributions'

const ProfileEdit = ({ profileData, style, className }) => {
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
      edit
    </div>
  )
}

export default ProfileEdit
