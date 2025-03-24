import React, { Fragment, use } from 'react'

function ShowUser({users}) {
  
  return (
  <Fragment>
<div className='card'>
    <h1>Loading user</h1>
    {
        users.map( user => <div 
        className='card'> 
        <h1>{user.name}</h1>
        <h1>{user.username}</h1>
        <h1>{user.email}</h1>
         </div>)
    }
</div>
  </Fragment>
  )
}

export default ShowUser