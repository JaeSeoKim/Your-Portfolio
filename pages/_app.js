import React from 'react'
// import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo, initializeApollo } from '../lib/apollo/client'
import Layout from '../components/Layout'
// import { profileQuery } from '../components/commons/Nav'
import 'react-multi-carousel/lib/styles.css'
import 'react-vertical-timeline-component/style.min.css'
import 'highlight.js/styles/github-gist.css'
import '../styles/tailwind.base.css'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

const app = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
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
