import React, { useContext } from "react"
import Link from "next/link"
import { whiteModeColor, darkModeColor } from "../../lib/utils/constans"
import ThemeContext from "../../lib/context/ThemContext"
import LoginButton from "./LoginButton"
import LoggedButton from "./LoggedButton"

type Props = {
  user?: string
}

const Nav: React.FunctionComponent<Props> = ({ user }) => {
  const { isDarkMode } = useContext(ThemeContext)
  console.log(user, typeof user)
  return (
    <nav
      style={
        isDarkMode
          ? {
              background: `linear-gradient(90deg, ${darkModeColor.mainColor1} 0%, ${darkModeColor.mainColor2} 100%)`,
            }
          : {
              background: `linear-gradient(90deg, ${whiteModeColor.mainColor1} 0%, ${whiteModeColor.mainColor2} 100%)`,
            }
      }
    >
      <div className="container mx-auto navigation flex items-center justify-between flex-wrap p-6">
        <Link href="/">
          <a className="flex items-center flex-shrink-0 text-white mr-6">
            <img
              src={"https://avatars3.githubusercontent.com/u/48559454?s=60&v=4"}
              alt="siteIcon"
              className="fill-current rounded-full h-8 w-8 mr-2"
              width="54"
              height="54"
            />
            <span className="font-semibold text-xl tracking-tight">
              Your Portfolio
            </span>
          </a>
        </Link>
        <div className="block lg:hidden">
          <div
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-300 hover:text-gray-300"
            onClick={() => {
              document?.getElementById("navMenuBtn")?.classList.toggle("hidden")
            }}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </div>
        </div>
        <div
          id="navMenuBtn"
          className="hidden w-full block flex-grow mt-auto lg:flex lg:items-center lg:w-auto "
        >
          <div className="text-sm lg:flex-grow mt-auto">
            <Link href="/">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                About
              </a>
            </Link>
          </div>
          <div>
            {user ? (
              <LoggedButton className={"flex justify-end"} user={user} />
            ) : (
              <LoginButton className={"flex justify-end"} />
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
