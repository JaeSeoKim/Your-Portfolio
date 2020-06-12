import React from "react"
import { NextPage } from "next"

interface Props {
  user?: string
}

const about: NextPage<Props> = ({ user }) => {
  return <div>About{user}</div>
}

// about.getInitialProps = async ({ req }) => {
//   // @ts-ignore
//   const user = req.user || null
//   return { user }
// }

export default about
