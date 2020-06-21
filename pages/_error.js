import { useContext } from 'react'
import ThemeContext from '../lib/context/ThemContext'

const Error = ({ statusCode }) => {
  const { isDarkMode } = useContext(ThemeContext)
  return (
    <div className={'flex items-center justify-center mt-64'}>
      <div>
        <h1
          className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
          {statusCode ? (
            <div>
              <span className={`font-bold`}>{statusCode}</span> - An error{' '}
              {statusCode} occurred on server
            </div>
          ) : (
            'An error occurred on client'
          )}
        </h1>
      </div>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
