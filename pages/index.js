import React, { useContext } from 'react'
import ThemeContext from '../lib/context/ThemContext'
import RandomProfile from '../components/Home/RandomProfile'
import Layout from '../components/Layout'

const home = () => {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <Layout index>
      <div className={'container'}>
        <div
          className={`max-w-5xl mx-auto mt-8 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
          <div className="w-full p-6">
            <h3 className="text-3xl font-bold leading-none mb-3">
              다른 사용자들의 포트폴리오를 구경 해보세요!!
            </h3>
            <p className="mb-8">
              램덤하게 추천되는 포트폴리오 입니다! (검색기능, 좋아요기능을 통한
              랭킹 시스템 등등 구현 예정)
            </p>
          </div>
          <div className="w-full p-6">
            <RandomProfile />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default home
