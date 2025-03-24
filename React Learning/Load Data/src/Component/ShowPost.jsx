import React from 'react'

function ShowPost({data}) {
    const {body, title} = data
  return (
    <div className='card'>
        <h1>{title}</h1>
        <p>{body}</p>
    </div>
  )
}

export default ShowPost