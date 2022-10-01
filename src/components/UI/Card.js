import React from 'react'

function Card({children}) {
  return (
    <div className=' rounded-md shadow-md m-4'>{children}</div>
  )
}

export default Card