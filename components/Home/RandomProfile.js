import React, { useContext } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import ThemeContext from '../../lib/context/ThemContext'
import ProfileCard from './ProfileCard'
import Dots from './Dots'
import Error from '../../pages/_error'
import Loading from '../commons/Loding'

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

const RandomProfile = () => {
  const { isDarkMode } = useContext(ThemeContext)
  const { data, loading, error } = useQuery(usersQuery)
  const users = data?.users

  if (error) {
    return <Error statusCode={404} />
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      {users.map && (
        <Dots>
          {users.map((value, index) => (
            <ProfileCard key={index} data={value} />
          ))}
        </Dots>
      )}
    </div>
  )
}

// RandomProfile.getInitialProps = async ctx => {
//   const apolloClient = initializeApollo()

//   await apolloClient.query({
//     query: usersQuery
//   })

//   return {
//     initialApolloState: apolloClient.cache.extract()
//   }
// }

export default RandomProfile
