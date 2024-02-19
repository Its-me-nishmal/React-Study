import React from 'react'
let datetime = new Date();
let date = datetime.toTimeString().split(' ')[0]
function DateTime() {
  return (
    <div>{date}</div>
  )
}

export default DateTime