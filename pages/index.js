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
    <Layout index>
      <div className={'container'}>
        <div
          className={`max-w-5xl mx-auto mt-8 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
          <div className="w-full p-6">
            <h3 className="text-3xl font-bold leading-none mb-3">
              다른 사용자들의 포트폴리오를 구경 해보세요!!
            </h3>
            <p className="mb-8">
              램덤하게 추천되는 포트폴리오 입니다! (검색기능, 좋아요기능을 통한
              랭킹 시스템 등등 구현 예정)
            </p>
          </div>
          <div className="w-full p-6">
            {users.map && (
              <Dots>
                {users.map((value, index) => (
                  <ProfileCard key={index} data={value} />
                ))}
              </Dots>
            )}
          </div>
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
