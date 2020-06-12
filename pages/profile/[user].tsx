import React from "react"
import { NextPage } from "next"
import Error from "next/error"

interface Props {
  user?: string
  queryUser: string
}

const userProfile: NextPage<Props> = ({ user, queryUser }) => {
  if (!user && user !== queryUser) {
    return <Error statusCode={404} />
  }
  return <div>userProfile{user}</div>
}

userProfile.getInitialProps = async ({ req }) => {
  const {
    // @ts-ignore
    params: { user },
  } = req
  return { queryUser: user }
}

export default userProfile
