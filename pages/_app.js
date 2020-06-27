import React, { useState, useEffect } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from '../lib/apollo/client'
import Layout from '../components/Layout'
import 'react-multi-carousel/lib/styles.css'
import 'react-vertical-timeline-component/style.min.css'
import 'highlight.js/styles/atom-one-dark.css'
import 'prismjs/themes/prism-tomorrow.css'
import '../styles/tailwind.base.css'
import ThemeContext from '../lib/context/ThemContext'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

const app = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState)
  const [isDarkMode, setDarkMode] = useState(false)

  const toggleThemMode = e => {
    setDarkMode(e.currentTarget.checked)
    if (!isDarkMode) {
      localStorage.setItem('isDarkMode', 'true')
    } else {
      localStorage.setItem('isDarkMode', 'false')
    }
  }

  useEffect(() => {
    if (window) {
      try {
        const mode = localStorage.getItem('isDarkMode')
        if (mode === 'true') {
          setDarkMode(true)
        } else {
          setDarkMode(false)
        }
      } catch (error) {
        localStorage.setItem('isDarkMode', 'false')
      }
    }
  }, [])

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <ThemeContext.Provider value={{ isDarkMode, toggleThemMode }}>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </ThemeContext.Provider>
      </ApolloProvider>
    </>
  )
}

export default app
