import React from "react"
import App, { Container as NextContainer, AppContext } from "next/app"
import "../styles/tailwind.base.css"
import Layout from "components/commons/Layout"

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    // @ts-ignore
    if (ctx.req && ctx.req.session.passport) {
      // @ts-ignore
      pageProps.user = ctx.req.session.passport.user
    }
    return { pageProps }
  }
  // @ts-ignore
  constructor(props) {
    super(props)
    this.state = {
      user: props.pageProps.user,
    }
  }

  render() {
    const { Component, pageProps } = this.props

    const props = {
      ...pageProps,
      // @ts-ignore
      user: this.state.user,
    }

    return (
      <NextContainer>
        <Layout user={props.user}>
          <Component {...props} />
        </Layout>
      </NextContainer>
    )
  }
}

export default MyApp
