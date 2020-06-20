import React from 'react'
// import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo, initializeApollo } from '../lib/apollo/client'
import Layout from '../components/Layout'
// import { profileQuery } from '../components/commons/Nav'
import '../styles/tailwind.base.css'
import 'react-multi-carousel/lib/styles.css'

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

// app.getInitialProps = async appContext => {
//   const appProps = await App.getInitialProps(appContext)
//   const apolloClient = initializeApollo()

//   await apolloClient.query({
//     query: profileQuery
//   })

//   return { ...appProps, initialApolloState: apolloClient.cache.extract() }
// }

export default app
