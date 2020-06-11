import React, { ChangeEvent } from "react"
import { FiMoon, FiSun } from "react-icons/fi"
import { AiOutlineArrowUp } from "react-icons/ai"

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  style?: React.CSSProperties
  className?: string
  checked?: boolean
}

const ToggleButton: React.FunctionComponent<Props> = ({
  onChange,
  style,
  className,
  checked = false,
}) => {
  return (
    <div className={className} style={style}>
      <label>
        <input
          type="checkbox"
          onChange={onChange}
          checked={checked}
          className={"hidden"}
        />
        <div
          className={
            checked
              ? "bg-gray-700 hover:bg-white text-white hover:text-gray-700 text-xs px-3 py-2 rounded-full shadow-md"
              : "bg-white hover:bg-gray-700 text-gray-700 hover:text-white text-xs px-3 py-2 rounded-full shadow-md"
          }
        >
          {checked ? (
            <div className={"flex content-end"}>
              <FiSun className="fill-current text-red-400 inline-block h-4 w-4 mr-0 md:mr-1" />
              <span className="hidden md:block">라이트 모드로 보기</span>
            </div>
          ) : (
            <div className={"flex content-end"}>
              <FiMoon className="fill-current text-yellow-400 inline-block h-4 w-4 mr-0 md:mr-1" />
              <span className="hidden md:block">라이트 모드로 보기</span>
            </div>
          )}
        </div>
      </label>
      <div
        className={
          checked
            ? "bg-gray-700 hover:bg-white text-white hover:text-gray-700 p-2 my-auto ml-2 rounded-full shadow-md"
            : "bg-white hover:bg-gray-700 text-gray-700 hover:text-white p-2 my-auto ml-2 rounded-full shadow-md"
        }
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" })
        }}
      >
        <AiOutlineArrowUp />
      </div>
    </div>
  )
}

export default ToggleButton
