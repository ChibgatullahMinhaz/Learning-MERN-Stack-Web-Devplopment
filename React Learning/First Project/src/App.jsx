
import './App.css'

function App() {

  return (
    <>
      
      <h1>Vite + React</h1>
      <Sport></Sport>
      <Sports></Sports>
      <Person></Person>
    </>
  )
}
const Sport = ()=>{
  return <>
  <p>Dog</p>
  </>
}
function Person(){
  return <>
  <h1>I am a Persona</h1>
  <h1>I play</h1>
  <Sports></Sports>
  </>
}
function Sports () {
  return (  
<>
<h1>football Game </h1>
</>
  );
}

 
export default App
