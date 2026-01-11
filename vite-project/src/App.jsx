import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementbyAmount, increment, incrementbyAmount } from './features/counterSlice'


const App = () => {

  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        dispatch(increment())
      }}>Increment</button>
      <button onClick={() => {
        dispatch(decrement())
      }}>Decrement</button>

      <button onClick={() => {
        dispatch(incrementbyAmount(10))
      }}>Increment of 10</button>

      <button onClick={() => {
        dispatch(decrementbyAmount(10))
      }}>decrement of 10</button>
    </div>
  )
}

export default App
