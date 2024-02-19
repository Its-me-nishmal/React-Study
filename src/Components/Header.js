import React from 'react'
import DateTime from './DateTime'
function Header(p) {
  return (
    <div>Header {p.name} {<DateTime />}</div>
  )
}

export default Header