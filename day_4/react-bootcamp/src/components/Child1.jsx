// import React from "react"

// const Child1 = (props) => {
//     console.log(props);
//     return (    
//      <div>{props.name}</div>
//     );
// }

// export default Child1;  

import React from 'react'

const Child1 = (props) => {
    console.log(props)
    const cn1 = props.n1;
  return (
    <div>Child1 {cn1}</div>
  );
}

export default Child1;
