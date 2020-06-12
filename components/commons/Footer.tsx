import React, { useContext } from "react"
import ThemeContext from "../../lib/context/ThemContext"

type Props = {}

const Footer: React.FunctionComponent<Props> = () => {
  const { isDarkMode } = useContext(ThemeContext)
  return (
    <div className={"flex justify-center"}>
      <div className="p-6">
        <a
          href={"https://github.com/JaeSeoKim"}
          className={
            isDarkMode
              ? "text-sm text-gray-300 hover:text-gray-500 mt-4 lg:mt-0"
              : "text-sm text-gray-700 hover:text-gray-500 mt-4 lg:mt-0"
          }
        >
          &copy;<span className="text-bold">{"JaeSeoKim"}</span>
        </a>
      </div>
    </div>
  )
}

export default Footer
