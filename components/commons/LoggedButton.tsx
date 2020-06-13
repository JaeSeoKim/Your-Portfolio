import React from "react"
import { GoMarkGithub } from "react-icons/go"
import Link from "next/link"
type Props = {
  style?: React.CSSProperties
  className?: string
  user: string
}

const LoggedButton: React.FunctionComponent<Props> = ({
  style,
  className,
  user,
}) => {
  return (
    <div className={className} style={style}>
      <div
        className={
          "inline-block flex text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-gray-300 mt-4 lg:mt-0 select-none cursor-pointer"
        }
      >
        <Link href={"/profile/[user]"} as={`/profile/${user}`} shallow={true}>
          <a className={"hover:text-gray-300"}>{user}</a>
        </Link>
        <div className={"mx-2 select-none"}>|</div>
        <Link href="/auth/logout">
          <a className={"hover:text-gray-300"}>Logout</a>
        </Link>
      </div>
    </div>
  )
}

export default LoggedButton
