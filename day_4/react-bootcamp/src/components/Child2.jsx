import React from 'react'

const Child2 = (props) => {
  console.log(props);
  const cn2 = props.n2;
  return (
    <div>Child2  {cn2}</div>
  );
}

export default Child2;
