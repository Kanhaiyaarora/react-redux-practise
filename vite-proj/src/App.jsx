import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeUsername } from './features/counterslice'

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        dispatch(changeUsername())
      }}>Change Username</button>
    </div>
  )
}

export default App
