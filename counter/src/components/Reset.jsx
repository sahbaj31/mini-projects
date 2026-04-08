import React from 'react'

const Reset = (props) => {
  const resetHandler =()=>{
    props.setCount(0);
  }
  return (
    <div>
      <button onClick={resetHandler}>Reset</button>
    </div>
  )
}

export default Reset
