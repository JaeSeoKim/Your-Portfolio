import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from '../apollo/client'
import Layout from '../components/Layout'
import '../styles/tailwind.base.css'

const app = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default app
