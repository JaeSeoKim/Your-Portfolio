import React, { useContext } from 'react'
import gql from 'graphql-tag'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import ThemeContext from '../lib/context/ThemContext'
import Profile from '../components/profile/Profile'

const userQuery = gql`
  query userQuery($username: String!) {
    user(username: $username) {
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
  const router = useRouter()
  const { username } = router.query
  if (!username) {
    return null
  }
  const { isDarkMode } = useContext(ThemeContext)
  const { data, loading, error } = useQuery(userQuery, {
    variables: { username }
  })

  const user = data?.user

  if (error) {
    return <div>error</div>
  }

  if (loading) {
    return <div>loding</div>
  }

  return (
    <div className={'container max-w-screen-md mx-auto'}>
      <Profile profileData={user} className={'w-full'} />
    </div>
  )
}

export default profile
