import React, { useContext } from 'react'
import gql from 'graphql-tag'
import Error from './_error'
import { useQuery } from '@apollo/react-hooks'
import ThemeContext from '../lib/context/ThemContext'
import Profile from '../components/profile/Profile'
import { initializeApollo } from '../lib/apollo/client'

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
    return <div>loading</div>
  }

  return (
    <div className={'container max-w-screen-md mx-auto'}>
      <Profile
        profileData={user}
        className={'w-full'}
        isEdit={profile ? user.id === profile.id && true : false}
      />
    </div>
  )
}

profile.getInitialProps = async (req, _res) => {
  const apolloClient = initializeApollo()
  try {
    await apolloClient.query({
      query: userQuery,
      variables: { username: req.query.username }
    })

    return {
      initialApolloState: apolloClient.cache.extract(),
      username: req.query.username
    }
  } catch (error) {
    return {
      error: 404,
      username: req.query.username
    }
  }
}

export default profile
