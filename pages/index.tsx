import React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'
import Layout from 'components/commons/Layout'

interface Props {}

const home: NextPage<Props> = () => {
  return (
    <Layout>
      <div>
        <h1>Home</h1>
        <Link href="/[id]" as="/jaeseo">
          <a>user - jaeseo</a>
        </Link>
        <br />
        <Link href="/[id]" as="/unknown">
          <a>user - unknown?</a>
        </Link>
      </div>
    </Layout>
  )
}

export default home
