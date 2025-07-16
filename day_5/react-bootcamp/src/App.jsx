import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [localState, changeLocalState] = useState({name: "React", age: 20});
  const [localState, changeLocalState] = useState(0);
  const [inputState, changeInputState] = useState("");
  console.log("Component Rendered.....");

  const handleClick = () => {  
    console.log("Button Clicked");
    //COUNTER:
    changeLocalState((prev) => {
      // console.log(prev);
      return prev+1;
    });

    // //CHANGE NAME:
    // changeLocalState((prev)=> {
    //   const obj = {...prev};
    //   obj.name = "BootCamp"

    //   return obj;
    // });
  };

  // const logText = (event) => {
  //   // console.log(event.target.value);
  //   console.log(inputState);
    

  //   changeInputState(event.target.value)
  // };
  const logText = (event) => {
    // console.log(event.target.value);
    console.log(inputState);
    

    changeInputState(event)
  };

  return (
    <div>
      <h2>Local State Value {localState}</h2>
      <button onClick={handleClick}>Change Value</button>
      <br/>
      <br/>
      {/* <input type="text" value={inputState} placeholder="Type Something" onChange={logText}/> */}
      <input type="text" value={inputState} onChange={(event) => {logText(event.target.value)}}/>
      <input type="text" value={inputState} onChange={(event) => changeInputState(event.target.value)}/>

    </div>
  );

}

export default App
