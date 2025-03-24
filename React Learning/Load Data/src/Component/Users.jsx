import React, { Suspense, useEffect, useState } from 'react'
import ShowUser from './ShowUser';

function Users() {
    const [users, setUser] = useState([]);
    useEffect(()=>{
        const fetchUser = async ()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const datas = await res.json();
            setUser(datas)
        }
        fetchUser()
    },[])
  return (
    <div>
        <Suspense fallback={ <h1>user Loading.......</h1> }>
        <ShowUser users={users}></ShowUser>
        </Suspense>
    </div>
  )
}

export default Users