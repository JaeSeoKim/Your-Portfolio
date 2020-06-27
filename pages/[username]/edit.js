import React, { useContext } from 'react'
import Router from 'next/router'
import gql from 'graphql-tag'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import ThemeContext from '../../lib/context/ThemContext'
import ProfileEdit from '../../components/profile/ProfileEdit'
import Error from '../_error'
import Loading from '../../components/commons/Loding'
import Layout from '../../components/Layout'

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

const profile = () => {
  const { isDarkMode } = useContext(ThemeContext)
  const router = useRouter()
  const {
    query: { username }
  } = router

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
    return <Error statusCode={404} />
  }

  if (loading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    )
  }

  if (profile.username !== username) {
    Router.push('/')
    return null
  }

  return (
    <Layout>
      <div className={'container'}>
        <ProfileEdit profileData={profile} className={'w-full'} />
      </div>
    </Layout>
  )
}

export default profile
