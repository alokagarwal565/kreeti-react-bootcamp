import React, { useState } from 'react'

const Form = () => {
  const [localStateName, setLocalStateName] = useState("");
  const [localStateEmail, setLocalStateEmail] = useState("");
  const [localStateGender, setLocalStateGender] = useState("");
  const handleClick = () => {
    console.log("Button Clicked, Form Submitted");
    console.log({localStateName},{localStateEmail},{localStateGender});
  };

    const logText = (event) => {
    // console.log(event.target.value);
    console.log(localStateName);

    setLocalStateName(event)
  };

  const logEmail = (event) => {
    console.log(localStateEmail);

    setLocalStateEmail(event)
  }
  
  const logGender = (event) => {
   console.log(localStateGender);

   setLocalStateGender(event)
  }

  return (
    <div>
      <input type="text" value={localStateName} onChange={(event) => {logText(event.target.value)}} placeholder='Name'/>
      <br />
      <input type="email" value={localStateEmail} onChange={(event) => {logEmail(event.target.value)}} placeholder='Email'/>
      <br />
      <label for="gender">Gender: </label>
      <select id="gender" name="gender" value={localStateGender} onChange={(event) => {logGender(event.target.value)}}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br />
      <button onClick={handleClick}>Submit</button>    
    </div>
  )
}

export default Form;