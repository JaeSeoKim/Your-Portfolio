import React from 'react'
import Divder from './Divder'

const Anchor = ({ tag }) => {
  return (
    <React.Fragment>
      <Divder color id={tag} />
      <a href={`#${tag}`}>
        <p className={'inline font-bold text-2xl'}># {tag}</p>
      </a>
    </React.Fragment>
  )
}

export default Anchor
