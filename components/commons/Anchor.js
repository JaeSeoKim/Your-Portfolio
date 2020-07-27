import React from 'react'
import Divider from './Divider'

const Anchor = ({ tag }) => {
  return (
    <React.Fragment>
      <Divider color id={tag} />
      <a href={`#${tag}`}>
        <p className={'inline font-bold text-2xl'}># {tag}</p>
      </a>
    </React.Fragment>
  )
}

export default Anchor
