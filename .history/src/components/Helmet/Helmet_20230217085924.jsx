import React from 'react'

const Helmet = (props) => {
    document.title = 'maltimart -' + props.title
  return (
    <div className=''>{props.children}</div>
  )
}

export default Helmet