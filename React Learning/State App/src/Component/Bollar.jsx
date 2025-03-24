import React, { useState } from "react";
import '../App.css'
export default function Bollar() {
  const [ count, setCount ] = useState(0);
  const [runs , setRuns] = useState(0)

  return (
    <div className="card">
        <h1>Baller Name is Sakib Al Hasan</h1>
        <h1>betsman Name is me</h1>
        <h1>Total Balls: {count}</h1>
        <h1>Total Runs: {runs}</h1>
        {
            count >= 6 && <p style={{
                color:'red'
            }}>Over Done</p> 
        }
      <button  onClick={()=> setCount( count+1)}>ball</button>
      <button  onClick={()=> setRuns(count => count+6)}>six</button>
      <button  onClick={()=> setRuns(count => count+1)}>single</button>
      <button  onClick={()=> setRuns(count => count+4)}>four</button>
      <button  onClick={()=> setRuns(runs => runs+1)}>wiet</button>
     
    </div>
  );
}
