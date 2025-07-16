import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Parent = (props) => {
    console.log(props)
    const n1 = props.mainObj.name1;
    console.log(n1);
    const n2 = props.mainObj.name2;
    console.log(n2);

    return (
        <div>
            Parent Component
            <Child1 n1={n1}/>
            <Child2 n2={n2}/>
        </div>
    );
}

export default Parent;