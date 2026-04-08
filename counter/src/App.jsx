import React from 'react'
import './index.css'
import IncDecButtons from './components/IncDecButtons'
import Reset from './components/Reset'

const App = () => {
  return (
    <div>
      <h3>Increment & Decrement</h3>
      <IncDecButtons/>
      {/* <Reset/> */}
    </div>
  )
}
export default App
