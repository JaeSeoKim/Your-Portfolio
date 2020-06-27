import React, { useContext } from 'react'
import Link from 'next/link'
import { whiteModeColor, darkModeColor } from '../../lib/utils/constans'
import ThemeContext from '../../lib/context/ThemContext'
import LoginButton from './LoginButton'
import LoggedButton from './LoggedButton'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { GoMarkGithub } from 'react-icons/go'

export const profileQuery = gql`
  query profileQuery {
    profile {
      id
      username
    }
  }
`

const Nav = ({ nav }) => {
  const { isDarkMode } = useContext(ThemeContext)
  const { data, loading, error } = useQuery(profileQuery)

  const name = nav?.name
  const subMenu = nav?.subMenu

  const profile = data?.profile

  return (
    <nav
      style={
        isDarkMode
          ? {
              background: `linear-gradient(90deg, ${darkModeColor.mainColor1} 0%, ${darkModeColor.mainColor2} 100%)`
            }
          : {
              background: `linear-gradient(90deg, ${whiteModeColor.mainColor1} 0%, ${whiteModeColor.mainColor2} 100%)`
            }
      }>
      <div className="container mx-auto navigation flex items-center justify-between flex-wrap p-6">
        {name ? (
          <a
            href={'#Profile'}
            className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">
              {`${name} - Portfolio`}
            </span>
          </a>
        ) : (
          <Link href={'/'}>
            <a className="flex items-center flex-shrink-0 text-white mr-6">
              <span className="font-semibold text-xl tracking-tight">
                {'Your Portfolio'}
              </span>
            </a>
          </Link>
        )}

        <div className="block lg:hidden">
          <div
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-300 hover:text-gray-300"
            onClick={() => {
              document?.getElementById('navMenuBtn')?.classList.toggle('hidden')
            }}>
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </div>
        </div>
        <div
          id="navMenuBtn"
          className="hidden w-full block flex-grow mt-auto lg:flex lg:items-center lg:w-auto ">
          <div className="text-sm lg:flex-grow mt-auto">
            {subMenu ? (
              <>
                <Link href="/">
                  <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                    Home
                  </a>
                </Link>
                <a
                  href="#Profile"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                  Profile
                </a>
                <a
                  href="#GitHub Contributions"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                  GitHub
                </a>
                {subMenu.map((menu, index) => (
                  <a
                    key={index}
                    href={`#${menu}`}
                    className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                    {menu}
                  </a>
                ))}
              </>
            ) : (
              <>
                <Link href="/about">
                  <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                    About
                  </a>
                </Link>
              </>
            )}
          </div>
          {name ? (
            <div>
              {profile ? (
                <div
                  className={
                    'inline-block flex text-sm px-4 py-2 leading-none rounded text-white mt-4 lg:mt-0 select-none'
                  }>
                  <Link href={'/'}>
                    <a className={'hover:text-gray-300 cursor-pointer'}>
                      MainPage
                    </a>
                  </Link>
                  <div className={'mx-2 select-none'}>|</div>
                  <Link href="/api/logout">
                    <a className={'hover:text-gray-300 cursor-pointer'}>
                      Logout
                    </a>
                  </Link>
                </div>
              ) : (
                <div
                  className={
                    'inline-block flex text-sm px-4 py-2 leading-none rounded text-white mt-4 lg:mt-0 select-none border border-white hover:border-gray-300'
                  }>
                  <Link href={'/'}>
                    <a className={'hover:text-gray-300 cursor-pointer'}>
                      Create Your Portfolio
                    </a>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div>
              {profile ? (
                <LoggedButton
                  className={'flex justify-end'}
                  user={profile.username}
                />
              ) : (
                <LoginButton className={'flex justify-end'} />
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav
