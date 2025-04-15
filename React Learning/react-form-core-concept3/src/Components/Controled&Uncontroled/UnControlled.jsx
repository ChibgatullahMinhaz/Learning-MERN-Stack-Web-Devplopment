import React, { useRef } from 'react'

export const UnControlled = () => {
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
const handleSubmit = e => {
    e.preventDefault();
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    console.log('my name is ', name, 'and my password is ', password);
   
}
  return (
    <div>
        <h1>UnControlled Form</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={nameRef} placeholder='Name' />
            <input type="password" ref={passwordRef} placeholder='Password' />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
