
import { useState } from 'react';
import './App.css'
import Search from './Component/Search/Search';
import Task from './Component/Tasks/Task2.jsx'
import Counter from './Component/Tasks/Counter.jsx';
function App() {
  const [theme, setTheme] =useState(false)
  const handleChnageTheme = ()=>{
    setTheme(!theme)
  }

  return (
    <div className={theme? 'light': 'dark'} >
      <button onClick={handleChnageTheme}>
        {
          theme ? 'Dark mode' : 'Light Mode'
        }
      </button>
    <Task></Task>
    <Counter></Counter>
  <Search></Search>
    </div>
  )
}

export default App
