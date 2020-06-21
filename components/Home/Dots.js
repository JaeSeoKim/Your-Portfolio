import React, { useContext } from 'react'
import ThemeContext from '../../lib/context/ThemContext'
import Link from 'next/link'
import Carousel from 'react-multi-carousel'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

const CustomLeftArrow = ({ onClick }) => {
  const { isDarkMode } = useContext(ThemeContext)

  return null
  // <AiOutlineArrowLeft
  //   onClick={() => onClick()}
  //   className={`absolute w-8 h-8 pb-2 react-multiple-carousel__arrow--left ${
  //     isDarkMode
  //       ? 'text-gray-600 hover:text-gray-300'
  //       : 'text-gray-300 hover:text-gray-600'
  //   }`}
  // />
}

const CustomRightArrow = ({ onClick }) => {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <AiOutlineArrowRight
      onClick={() => onClick()}
      className={`absolute w-8 h-8 pb-3 react-multiple-carousel__arrow--right ${
        isDarkMode
          ? 'text-gray-600 hover:text-gray-300'
          : 'text-gray-300 hover:text-gray-600'
      }`}
    />
  )
}

const CustomDot = ({ onClick, ...rest }) => {
  const { isDarkMode } = useContext(ThemeContext)
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType }
  } = rest

  return (
    <div
      className={
        isDarkMode
          ? `w-3 h-1 ${active ? 'bg-gray-100' : 'bg-gray-500'} rounded m-1`
          : `w-3 h-1 ${active ? 'bg-gray-500' : 'bg-gray-100'} rounded m-1`
      }
      onClick={() => onClick()}
    />
  )
}

const Dots = ({ style, className, href, as, value, children }) => {
  return (
    <div className={className} style={style}>
      <Carousel
        ssr
        responsive={{
          all: {
            breakpoint: { max: 3000, min: 0 },
            items: 1,
            slidesToSlide: 1
          }
        }}
        deviceType={'all'}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        arrows={true}
        infinite={true}
        autoPlay
        autoPlaySpeed={2000}
        customDot={<CustomDot />}
        showDots>
        {children}
      </Carousel>
    </div>
  )
}

export default Dots
