import React, { useState } from 'react'

function Task2() {
    const [state , setState] = useState(false)
    const handleClick =()=>{
      setState(!state)
    }
  return (
    <div  >
        <button onClick={handleClick}>
            {
                state ? 'Hide' : 'Show' 
            }
        </button>
        {
            state ? <p>Hello, React Learning!</p> : ''
        }
    </div>
  )
}

export default Task2