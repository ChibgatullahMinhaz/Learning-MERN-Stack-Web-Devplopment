
import { Outlet } from 'react-router'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
    <Toaster></Toaster>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default App
