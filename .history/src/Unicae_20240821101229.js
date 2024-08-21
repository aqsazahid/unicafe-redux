import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Unicafe = () => {
  const dispatch = useDispatch()
  const feedback = useSelector(state => state)

  const handleGood = () => {
    dispatch({ type: 'GOOD' })
  }

  const handleOk = () => {
    dispatch({ type: 'OK' })
  }

  const handleBad = () => {
    dispatch({ type: 'BAD' })
  }

  const handleReset = () => {
    dispatch({ type: 'ZERO' })
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleOk}>Ok</button>
      <button onClick={handleBad}>Bad</button>
      <button onClick={handleReset}>Reset</button>

      <h2>Statistics</h2>
      <p>Good: {feedback.good}</p>
      <p>Ok: {feedback.ok}</p>
      <p>Bad: {feedback.bad}</p>
    </div>
  )
}

export default Unicafe
