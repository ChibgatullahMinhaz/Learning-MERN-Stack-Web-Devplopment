import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [phones, setPhones] = useState<Array<string>>([])
useEffect(()=>{
  fetch('http://localhost:5000/phones')
  .then(response => response.json())
  .then(data => setPhones(data))
},[])


console.log(phones)

  return (
    <div>
      <h1>Phone Names</h1>
      <ul>
        {phones.map((phone, index) => (
          <li key={index}>{phone.brand}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
