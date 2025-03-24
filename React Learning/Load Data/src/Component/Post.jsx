import React, { use } from 'react'
import ShowPost from './ShowPost'

export default function Post({response}) {
    const datas = use(response)
   
  return (
    <div>
    {
        datas.map(data => <ShowPost key={data.id} data={data}></ShowPost> )
    }
    </div>
  )
}
