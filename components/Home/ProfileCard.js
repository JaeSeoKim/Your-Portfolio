import React, { useContext } from 'react'
import ThemeContext from '../../lib/context/ThemContext'
import Link from 'next/link'

const ProfileCard = ({ style, className, href, as, data }) => {
  const { isDarkMode } = useContext(ThemeContext)
  /*
    id
    username
    displayName
    profileUrl
    avatarUrl
    email
    blog
    bio
   */
  return (
    <div className={className} style={style}>
      <div className="w-full h-full lg:max-w-full lg:flex">
        <Link href={'[username]'} as={data.username}>
          <div
            className={`w-full h-full md:flex cursor-pointer ${
              isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
            } ${
              isDarkMode ? 'text-white' : 'text-gray-700'
            } rounded-lg px-6 pt-6 pb-6 md:pb-3`}>
            <img
              className="h-24 w-24 md:h-32 md:w-32 rounded-full mx-auto md:mx-0 md:mr-6"
              src={data.avatarUrl}
            />
            <div className="text-center whitespace-pre-wrap md:flex md:flex-col md:justify-between md:text-left">
              <div>
                <h2 className="md:inline text-lg">{data.username} </h2>
                <span className="text-purple-500">{data.displayName}</span>
              </div>
              <div
                className={`text-left mt-4 md:mt-0 ${
                  isDarkMode ? 'text-gray-500' : 'text-gray-700'
                }`}>
                {data.bio && data.bio.substring(0, 100).trim()}
                {'...'}
              </div>
              <div
                className={
                  'whitespace-no-wrap md:h-12 md:scrolling-touch md:overflow-y-auto'
                }>
                {data.tag && (
                  <div className={'flex flex-wrap'}>
                    {data.tag.map((value, index) => (
                      <div
                        key={index}
                        className={`appearance-none inline-flex w-auto font-normal text-sm ${
                          isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                        } rounded-full  py-1 px-2 mr-1 mt-2 `}>
                        {value}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ProfileCard
