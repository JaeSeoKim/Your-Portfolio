import React, { useContext, useState, useEffect } from 'react'
import gql from 'graphql-tag'
import Router from 'next/router'
import { useMutation } from '@apollo/react-hooks'
import ThemeContext from '../../lib/context/ThemContext'
import PhotoFrame from './PhotoFrame'
import Input from '../commons/Input'
import TextArea from '../commons/TextArea'
import TagInput from './TagInput'
import TimeLineInput from './TimeLineInput'

const UpdateProfileMutaition = gql`
  mutation UpdateProfileMutaition(
    $displayName: String!
    $profileUrl: String!
    $avatarUrl: String!
    $email: String!
    $blog: String!
    $bio: String!
    $tag: [String!]!
    $timeLineFeilds: [InputTimeLineFeild!]!
  ) {
    updateProfile(
      input: {
        displayName: $displayName
        profileUrl: $profileUrl
        avatarUrl: $avatarUrl
        email: $email
        blog: $blog
        bio: $bio
        tag: $tag
        timeLineFeilds: $timeLineFeilds
      }
    ) {
      id
      username
      displayName
      profileUrl
      avatarUrl
      email
      blog
      bio
      tag
      timeLineFeilds {
        title
        timeLine {
          color
          icon
          title
          subtitle
          value
        }
      }
    }
  }
`

const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const ProfileEdit = ({ profileData, style, className }) => {
  const [updateProfile] = useMutation(UpdateProfileMutaition)
  const [profile, setProfile] = useState({
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
    ...profileData,
    typeAvatarUrl: false,
    typeEmail: false
  })
  const [isLoading, setIsLoading] = useState(false)
  const { isDarkMode } = useContext(ThemeContext)

  const handelDisplayName = value =>
    setProfile({ ...profile, displayName: value })
  const handelProfileUrl = value =>
    setProfile({ ...profile, profileUrl: value })
  const handelAvatarUrl = value =>
    setProfile({ ...profile, avatarUrl: value, typeAvatarUrl: false })
  const handelEmail = value => {
    const typeEmail = !emailReg.test(value)
    setProfile({ ...profile, email: value, typeEmail })
  }
  const handelBlog = value => setProfile({ ...profile, blog: value })
  const handelTag = value => {
    setProfile({ ...profile, tag: value })
  }
  const handelBio = value => setProfile({ ...profile, bio: value })
  const handelAddTimeLineFeild = () =>
    setProfile({
      ...profile,
      timeLineFeilds: profile.timeLineFeilds
        ? profile.timeLineFeilds.concat({
            title: '',
            timeLine: [
              {
                color: '#f44336',
                icon: 'DiCode',
                title: '',
                subtitle: '',
                value: ''
              }
            ]
          })
        : [
            {
              title: '',
              timeLine: [
                {
                  color: '#f44336',
                  icon: 'DiCode',
                  title: '',
                  subtitle: '',
                  value: ''
                }
              ]
            }
          ]
    })

  const handelSubmit = async e => {
    e.preventDefault()
    try {
      const timeLineFeilds = profile.timeLineFeilds.map(feilds => {
        const { title, timeLine } = feilds
        let removeTimeLine = []
        timeLine.map(data => {
          const { __typename, ...other } = data
          removeTimeLine.push(other)
        })
        return { title, timeLine: removeTimeLine }
      })
      setIsLoading(true)
      await updateProfile({
        variables: {
          displayName: profile.displayName,
          profileUrl: profile.profileUrl,
          avatarUrl: profile.avatarUrl,
          email: profile.email,
          blog: profile.blog,
          bio: profile.bio,
          tag: profile.tag,
          timeLineFeilds: timeLineFeilds
        }
      })
      Router.push('/[username]', `/${profileData.username}`)
    } catch (error) {
      console.log(error)
      console.log('[/profile/edit] submit Error')
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const typeEmail = !emailReg.test(profile.email)
    setProfile({ ...profile, typeEmail })
  }, [])

  return (
    <div style={style} className={className}>
      <div className="flex justify-center mb-6">
        <PhotoFrame
          img={profile.avatarUrl}
          rounding
          className={'my-auto mx-auto'}
          onError={() => setProfile({ ...profile, typeAvatarUrl: true })}
          isLoading={isLoading}
        />
      </div>
      <div className="flex justify-center">
        <Input
          className={'px-3 mb-6 w-full max-w-screen-lg'}
          label={'Profile Img Url'}
          placeholder={'https://img.example/profile.png'}
          type={'url'}
          message={'정상적인 Img Url를 입력해주세요'}
          onChange={handelAvatarUrl}
          value={profile.avatarUrl}
          error={profile.typeAvatarUrl}
          isLoading={isLoading}
        />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap -mx-3 mb-6 w-full max-w-screen-lg">
          <Input
            className={'w-full md:w-1/2 px-3 mb-6'}
            label={'Display Name'}
            placeholder={'Your Name'}
            type={'text'}
            onChange={handelDisplayName}
            value={profile.displayName}
            isLoading={isLoading}
          />
          <Input
            className={'w-full md:w-1/2 px-3 mb-6'}
            label={'Email'}
            placeholder={'Your Email'}
            type={'email'}
            message={'올바른 Email 주소를 입력해주세요'}
            onChange={handelEmail}
            value={profile.email}
            error={profile.typeEmail}
            isLoading={isLoading}
          />
          <Input
            className={'w-full md:w-1/2 px-3 mb-6'}
            label={'GitHub Link'}
            placeholder={'Your GitHub Url'}
            type={'url'}
            onChange={handelProfileUrl}
            value={profile.profileUrl}
            isLoading={isLoading}
          />
          <Input
            className={'w-full md:w-1/2 px-3 mb-6'}
            label={'Blog Link'}
            placeholder={'Your Blog Url'}
            type={'url'}
            onChange={handelBlog}
            value={profile.blog}
            isLoading={isLoading}
          />
          <TagInput
            className={'w-full px-3 mb-6'}
            isLoading={isLoading}
            value={profile.tag}
            onChange={handelTag}
          />
          <TextArea
            className={'w-full px-3 mb-6'}
            label={'Bio'}
            value={profile.bio}
            onChange={handelBio}
            placeholder={'Introducing Yourself'}
            isLoading={isLoading}
          />
          {profile.timeLineFeilds &&
            profile.timeLineFeilds.map((value, index) => (
              <TimeLineInput
                key={index}
                className={'w-full px-3 mb-6'}
                isLoading={isLoading}
                value={value}
                onDelete={() => {
                  setProfile({
                    ...profile,
                    timeLineFeilds: profile.timeLineFeilds
                      .slice(0, index)
                      .concat(
                        profile.timeLineFeilds.slice(
                          index + 1,
                          profile.timeLineFeilds.length
                        )
                      )
                  })
                }}
                onChange={data => {
                  setProfile({
                    ...profile,
                    timeLineFeilds: profile.timeLineFeilds
                      .slice(0, index)
                      .concat(
                        data,
                        profile.timeLineFeilds.slice(
                          index + 1,
                          profile.timeLineFeilds.length
                        )
                      )
                  })
                }}
              />
            ))}

          <div
            onClick={handelAddTimeLineFeild}
            className={`w-full text-xl text-center ${
              isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
            } placeholder-gray-600 ${
              isDarkMode ? 'text-white' : 'text-gray-700'
            } rounded mx-3 mt-2 mb-6 ${
              isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-white'
            } cursor-pointer`}>
            Add
          </div>

          <div className="w-full px-3 mb-6">
            <button
              className={
                isDarkMode
                  ? 'transform transition duration-150 ease-in-out hover:scale-105 float-right w-32 bg-gray-800 hover:bg-purple-400 text-gray-100 text-xs px-2 md:px-3 py-2 rounded-full shadow-md cursor-pointer'
                  : 'transform transition duration-150 ease-in-out hover:scale-105 float-right w-32 bg-gray-100 hover:bg-indigo-400 text-gray-800 hover:text-white text-xs px-2 md:px-3 py-2 rounded-full shadow-md cursor-pointer'
              }
              disabled={isLoading}
              onClick={handelSubmit}
              type={'submit'}>
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileEdit
