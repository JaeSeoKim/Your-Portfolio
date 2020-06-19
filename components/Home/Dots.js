import React, { useContext } from 'react'
import ThemeContext from '../../lib/context/ThemContext'
import Link from 'next/link'
import Carousel from 'react-multi-carousel'

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
          ? `w-3 h-1 ${
              active ? 'bg-gray-300' : 'border border-gray-300'
            } rounded m-1`
          : `w-3 h-1 ${
              active ? 'bg-gray-500' : 'border border-gray-500'
            } rounded m-1`
      }
      onClick={() => onClick()}
    />
  )
}

const Dots = ({ style, className, href, as, value, children }) => {
  const { isDarkMode } = useContext(ThemeContext)

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
        arrows={false}
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
