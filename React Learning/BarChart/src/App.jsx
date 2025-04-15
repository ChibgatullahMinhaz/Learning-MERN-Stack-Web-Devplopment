import { Suspense } from 'react'
import './App.css'
import axios from 'axios'
import { Barchart } from './Components/Barchart';
const promies = axios.get('data.json');
function App() {

  return (
    <>
     <Suspense fallback={<div>Loading...</div>}>
     <Barchart promies={promies}></Barchart>
     </Suspense>
    </>
  )
}

export default App
