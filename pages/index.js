import React, { useContext } from 'react'
import gql from 'graphql-tag'
import Router from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import ThemeContext from '../lib/context/ThemContext'
import ProfileCard from '../components/Home/ProfileCard'
import { initializeApollo } from '../lib/apollo/client'
import Dots from '../components/Home/Dots'

const usersQuery = gql`
  query {
    users {
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

const home = () => {
  const { isDarkMode } = useContext(ThemeContext)
  const { data, loading, error } = useQuery(usersQuery)
  const users = data?.users

  if (error) {
    return <div>error</div>
  }

  if (loading) {
    return <div>loding</div>
  }

  return (
    <div className={'container'}>
      Home
      <div className={'flex justify-centor'}>
        <Dots className={'w-full lg:w-1/2'}>
          {users.map((value, index) => (
            <ProfileCard
              key={index}
              data={value}
              className={'w-full h-full px-2  pb-5'}
            />
          ))}
        </Dots>
      </div>
    </div>
  )
}

home.getInitialProps = async ctx => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: usersQuery
  })

  return {
    initialApolloState: apolloClient.cache.extract()
  }
}

export default home
