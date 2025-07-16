import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './components/Parent'
import Counter from './components/Counter'
import Form from './components/Form'

function App() { 
  return (
    <div>
      <Form/>
      <br />
      <br />
      <Parent/>
      <br />
      <br /> 
      <Counter/>
    </div>
  );
}

export default App
