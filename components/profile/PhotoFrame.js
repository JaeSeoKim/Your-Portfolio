import React from 'react'

const PhotoFrame = ({
  img,
  style,
  className,
  rounding,
  alt = 'userImg',
  children,
  onError = () => {}
}) => {
  return (
    <div style={style} className={className}>
      <img
        src={img}
        onError={e => {
          onError()
          e.target.src = '/profile.svg'
        }}
        alt={alt}
        className={
          rounding
            ? 'rounded-full border border-purple-300 h-64 w-64 m-5'
            : 'border object-cover border-purple-300 h-40 w-40 m-5'
        }
      />
      {children}
    </div>
  )
}

export default PhotoFrame
