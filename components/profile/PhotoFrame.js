import React from 'react'

const PhotoFrame = ({ img, style, className, rounding, alt = 'userImg' }) => {
  return (
    <div style={style} className={className}>
      <img
        src={img}
        alt={alt}
        className={
          rounding
            ? 'rounded-full border border-purple-300 h-64 w-64 m-5'
            : 'border object-cover border-purple-300 h-40 w-40 sm:h-full sm:w-full'
        }
      />
    </div>
  )
}

export default PhotoFrame
