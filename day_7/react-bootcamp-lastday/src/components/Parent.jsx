import React, { useRef } from 'react'

const Parent = () => {
  const localRef = useRef(null);
  console.log("Rendered...");

  const handleOnClick = () => {
    // console.log(localRef.current);
    localRef.current.focus();
  };

  return (
    <div>
        <input ref={localRef} type="text" placeholder='type something'/>
        <br />
        <br />
        <button onClick={handleOnClick}>Focus</button>
    </div>
  );
};

export default Parent;