import React, { useContext } from 'react'
import Router from 'next/router'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import ThemeContext from '../../lib/context/ThemContext'
import Profile from '../../components/profile/Profile'
import ProfileEdit from '../../components/profile/ProfileEdit'
import Error from './_error'

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
      tag
    }
  }
`

const profile = () => {
  const { isDarkMode } = useContext(ThemeContext)
  const { data, loading, error } = useQuery(profileQuery)

  const profile = data?.profile

  if (error) {
    if (
      String(error) ===
      'Error: GraphQL error: Authentication token is invalid, please log in'
    ) {
      Router.push('/')
      return null
    }
    return <Error statusCode={500} />
  }

  if (loading) {
    return <div>loding</div>
  }

  return (
    <div className={'container'}>
      <ProfileEdit profileData={profile} className={'w-full'} />
    </div>
  )
}

export default profile
