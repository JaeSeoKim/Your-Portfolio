import React from 'react'
import { GoMarkGithub } from 'react-icons/go'
import Link from 'next/link'

const LoginButton = ({ style, className }) => {
  return (
    <div className={className} style={style}>
      <Link href="/api/login">
        <a
          className={
            'inline-block flex text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-gray-300 hover:text-gray-300 mt-4 lg:mt-0 select-none cursor-pointer'
          }>
          <GoMarkGithub className={'fill-current my-auto mr-2'} />
          Continue with GitHub
        </a>
      </Link>
    </div>
  )
}

export default LoginButton
