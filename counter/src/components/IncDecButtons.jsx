import React from 'react'
import { useState } from 'react'
import Reset from './Reset';

const IncDecButtons = () => {
  const [count, setCount] = useState(0);
  const IncHandler = ()=>{
    setCount(perv=>perv+1);
  }
  const DecHandler = ()=>{
    setCount(perv=>perv-1);
  }
  const resetHandler=()=>{
    setCount(0);
  }

  return (
    <div>
      <button onClick={IncHandler}>-</button>
      <h2>{count}</h2>
      <button onClick={DecHandler}>+</button>
       <br />
      <button onClick={resetHandler}>Reset</button>
      {/* <Reset props={setCount}/> */}
    </div>
  )
}

export default IncDecButtons
