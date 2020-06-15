import React from 'react'
import Link from 'next/link'

const LoggedButton = ({ style, className, user }) => {
  return (
    <div className={className} style={style}>
      <div
        className={
          'inline-block flex text-sm px-4 py-2 leading-none rounded text-white mt-4 lg:mt-0 select-none cursor-pointer'
        }>
        <Link href={'/[name]/profile'} as={`/${user}/profile`} shallow={true}>
          <a className={'hover:text-gray-300'}>{user}</a>
        </Link>
        <div className={'mx-2 select-none'}>|</div>
        <Link href="/api/logout">
          <a className={'hover:text-gray-300'}>Logout</a>
        </Link>
      </div>
    </div>
  )
}

export default LoggedButton
