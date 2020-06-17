import React, { useContext, useState } from 'react'
import ThemeContext from '../../lib/context/ThemContext'
import PhotoFrame from './PhotoFrame'
import Input from '../commons/Input'
import Divder from '../commons/Divder'
import GitContributions from './GitContributions'

const ProfileEdit = ({ profileData, style, className }) => {
  const [profile, setProfile] = useState({
    displayName: '',
    profileUrl: '',
    avatarUrl: '',
    email: '',
    blog: '',
    bio: ''
  })
  const { isDarkMode } = useContext(ThemeContext)

  const handelDisplayName = value =>
    setProfile({ ...profile, displayName: value })
  const handelProfileUrl = value =>
    setProfile({ ...profile, profileUrl: value })
  const handelAvatarUrl = value => setProfile({ ...profile, avatarUrl: value })
  const handelEmail = value => setProfile({ ...profile, email: value })
  const handelBlog = value => setProfile({ ...profile, blog: value })
  const handelBio = value => setProfile({ ...profile, bio: value })

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
      <div className="flex justify-center mb-6">
        <PhotoFrame
          img={profile.avatarUrl}
          rounding
          className={'my-auto mx-auto'}
        />
      </div>
      <div className="flex justify-center">
        <Input
          className={'px-3 mb-6 w-full max-w-screen-md'}
          label={'Profile Img Url'}
          placeholder={'https://img.example/profile.png'}
          type={'url'}
          // message={}
          onChange={handelAvatarUrl}
          value={profile.avatarUrl}
        />
      </div>
      <div className="flex justify-center">
        <div class="flex flex-wrap -mx-3 mb-6 w-full max-w-screen-md">
          <Input
            className={'w-full md:w-1/2 px-3 mb-6'}
            label={'Display Name'}
            placeholder={'Your Name'}
            type={'text'}
            // message={}
            onChange={handelDisplayName}
            value={profile.displayName}
          />
          <Input
            className={'w-full md:w-1/2 px-3 mb-6'}
            label={'Email'}
            placeholder={'Your Email'}
            type={'email'}
            // message={}
            onChange={handelEmail}
            value={profile.email}
          />
          <Input
            className={'w-full md:w-1/2 px-3 mb-6'}
            label={'GitHub Link'}
            placeholder={'Your GitHub Url'}
            type={'url'}
            // message={}
            onChange={handelProfileUrl}
            value={profile.profileUrl}
          />
          <Input
            className={'w-full md:w-1/2 px-3 mb-6'}
            label={'Blog Link'}
            placeholder={'Your Blog Url'}
            type={'url'}
            // message={}
            onChange={handelBlog}
            value={profile.blog}
          />
          <div class="w-full px-3 mb-6">
            <label
              className={`block uppercase tracking-wide ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              } text-xs font-bold mb-2`}
              for="grid-first-name">
              Bio
            </label>
            <textarea
              className={`appearance-none block w-full h-64 ${
                isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
              } placeholder-gray-600 ${
                isDarkMode ? 'text-white' : 'text-gray-700'
              } ${
                isDarkMode ? 'border-gray-800' : 'border-gray-200'
              } rounded py-3 px-4 leading-tight focus:outline-none ${
                isDarkMode ? 'focus:bg-gray-700' : 'focus:bg-gray-100'
              } ${isDarkMode ? 'focus:border-gray-500' : 'focus:border-white'}`}
              onChange={e => handelBio(e.target.value)}
              type="text"
              placeholder="Introducing Yourself">
              {profile.bio}
            </textarea>
            {/* <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileEdit
