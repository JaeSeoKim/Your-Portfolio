import React from "react"
import { NextPage } from "next"
import { withRouter } from "next/router"
import Error from "next/error"

interface Props {
  user?: string
  queryUser: string
  router: {
    query: { user?: string }
  }
}

const userProfile: NextPage<Props> = ({ router, user }) => {
  console.log(router.query.user)
  if (!user) {
    return <Error statusCode={404} />
  }
  return <div>userProfile{user}</div>
}

// @ts-ignore
export default withRouter(userProfile)
