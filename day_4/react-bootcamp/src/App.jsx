import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Child1 from './components/Child1'
import Parent from './components/Parent'

function App() {
  // const [count, setCount] = useState(0)
  // const name2 = "New Component";
  const mainObj = {name1: "Alok", name2: "Rohan"};
  
  return (
    <div>
      {/* <Child1 name = {name2} title="demo title"/> */}
      <Parent mainObj={mainObj}/> 
    </div>
  );
}

export default App