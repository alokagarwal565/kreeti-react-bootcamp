import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Animal from './components/Animal'

function App() { 
  const [localState, changeLocalState] = useState(0);
  const [localState2, changeLocalState2] = useState(1);

  const handleClick1 = () => {
    changeLocalState(1);
  }

  const handleClick2 = () => {
    changeLocalState2(2);
  }

  // useEffect(()=>{},[]);
  useEffect(()=>{
    console.log("This is first useEffect");
    setTimeout(() => {
      // console.log("Timeout");
      changeLocalState2(2)
    }, 1000); //1000 ms = 1sec
  },[localState]);

  // useEffect(()=>{
  //   console.log("This is second useEffect");
  // },[localState, localState2]);

  return (
    <div>
      <h2>Local State Value {localState} {localState2}</h2>
      <button onClick={handleClick1}>Button 1</button>
      <button onClick={handleClick2}>Button 2</button>
      <br />
      <br />
      <Animal/>
    </div>
  );
}

export default App
