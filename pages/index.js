import React, { useContext } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import ThemeContext from '../lib/context/ThemContext'
import ProfileCard from '../components/Home/ProfileCard'
import { initializeApollo } from '../lib/apollo/client'
import Dots from '../components/Home/Dots'
import Layout from '../components/Layout'
import Error from './_error'
import Loading from '../components/commons/Loding'

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
      tag
    }
  }
`

const home = () => {
  const { isDarkMode } = useContext(ThemeContext)
  const { data, loading, error } = useQuery(usersQuery)
  const users = data?.users

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
    <Layout>
      <div className={'container'}>
        Home
        <div className={'flex justify-centor'}>
          {users.map && (
            <Dots className={'w-full lg:w-1/2'}>
              {users.map((value, index) => (
                <ProfileCard
                  key={index}
                  data={value}
                  className={'w-full h-full px-2 pb-5'}
                />
              ))}
            </Dots>
          )}
        </div>
      </div>
    </Layout>
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
