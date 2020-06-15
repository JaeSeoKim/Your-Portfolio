import React, { useContext } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import ThemeContext from '../../lib/context/ThemContext'
import Profile from '../../components/profile/Profile'

const profileQuery = gql`
  query {
    profile {
      id
      username
      displayName
      profileUrl
      avatarUrl
      email
      blog
      bio
    }
  }
`

const profile = () => {
  const { isDarkMode } = useContext(ThemeContext)
  const { data, loading, error } = useQuery(profileQuery)

  const profile = data?.profile

  if (error) {
    return <div>error</div>
  }

  if (loading) {
    return <div>loding</div>
  }

  return (
    <div className={'container'}>
      <h1 className={'text-3xl'}>Profile</h1>
      <Profile profileData={profile} className={'w-full'} />
    </div>
  )
}

export default profile
