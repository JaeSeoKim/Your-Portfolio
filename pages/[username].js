import React, { useContext } from 'react'
import gql from 'graphql-tag'
import Error from 'next/error'
import { useQuery } from '@apollo/react-hooks'
import ThemeContext from '../lib/context/ThemContext'
import Profile from '../components/profile/Profile'
import { initializeApollo } from '../lib/apollo/client'

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

const profile = ({ username }) => {
  const { isDarkMode } = useContext(ThemeContext)
  const { data, loading, error } = useQuery(userQuery, {
    variables: { username }
  })

  const user = data?.user

  if (error) {
    return <Error statusCode={404} />
  }

  if (loading) {
    return <div>loading</div>
  }

  return (
    <div className={'container max-w-screen-md mx-auto'}>
      <Profile profileData={user} className={'w-full'} />
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
      username: req.query.username
    }
  }
}

export default profile
