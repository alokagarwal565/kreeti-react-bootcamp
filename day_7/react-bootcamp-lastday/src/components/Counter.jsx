import React, { useEffect, useRef, useState } from 'react'

const Counter = () => {

  const localRef = useRef (null);
  const [localState, setLocalState] = useState(0);

  useEffect(() => {
    localRef.current = localState;
  }, [localState]);

  const handleClick = () => {
    setLocalState((prev) => {
      return prev + 1;
    })
  };

  const lcr = localRef.current;

  return (
    <div style={style.container}>
      {/* <h1>Counter</h1> */}
      <h3 style={style.header}>Prev (useRef) = {localRef.current}</h3>
      <h3 style={style.header}>Current (useState) = {localState}</h3>
      <br />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

const style = {
      header: {
       height: '100px',
       width: '100px',
       backgroundColor: 'red'
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };

export default Counter;