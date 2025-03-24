import React from 'react'

function Displayimage({datas}) {
   const {title,url, thumbnailUrl,id} = datas;
     return (
    <div className='container' >
        <div className='card'>
            <h5>{title}</h5>
            <img src={url} alt={title} />
            <p>{id}</p>
        </div>
    </div>
  )
}

export default Displayimage