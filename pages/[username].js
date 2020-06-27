import React, { useContext } from 'react'
import { NextSeo } from 'next-seo'
import gql from 'graphql-tag'
import Error from './_error'
import { useQuery } from '@apollo/react-hooks'
import ThemeContext from '../lib/context/ThemContext'
import Profile from '../components/profile/Profile'
import { initializeApollo } from '../lib/apollo/client'
import Loading from '../components/commons/Loding'
import Layout from '../components/Layout'

const profileQuery = gql`
  query {
    profile {
      id
      username
    }
  }
`

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

const profile = ({ username, error: NotFound }) => {
  const { isDarkMode } = useContext(ThemeContext)
  if (NotFound) {
    return <Error statusCode={404} />
  }
  const { data, loading, error } = useQuery(userQuery, {
    variables: { username }
  })

  const { data: profileData } = useQuery(profileQuery)

  const user = data?.user
  const profile = profileData?.profile

  if (error) {
    return <Error statusCode={404} />
  }

  if (loading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    )
  }
  return (
    <Layout
      nav={{
        name: user.username,
        subMenu:
          user.timeLineFeilds && user.timeLineFeilds.map(value => value.title)
      }}>
      <div className={'container max-w-screen-lg mx-auto'}>
        <NextSeo
          title={`${user.username} - Portfolio`}
          description={user.bio && user.bio.substring(0, 100).trim() + '...'}
          openGraph={{
            title: `${user.username} - Portfolio`,
            description: user.bio && user.bio.substring(0, 100).trim() + '...',
            url: `http://your-portfolio.vercel.app/${user.username}`,
            type: 'profile',
            profile: {
              username: user.username
            },
            images: [
              {
                url: user.avatarUrl,
                alt: 'Profile Photo'
              }
            ]
          }}
        />
        <Profile
          profileData={user}
          className={'w-full'}
          isEdit={profile ? (user.id === profile.id ? true : false) : false}
        />
      </div>
    </Layout>
  )
}

profile.getInitialProps = async ctx => {
  const apolloClient = initializeApollo()
  try {
    await apolloClient.query({
      query: userQuery,
      variables: { username: ctx.query.username }
    })
    return {
      initialApolloState: apolloClient.cache.extract(),
      username: ctx.query.username
    }
  } catch (error) {
    return {
      error: 404,
      username: ctx.query.username
    }
  }
}

export default profile
