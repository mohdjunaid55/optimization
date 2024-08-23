import React from 'react'
import { useCounter } from './useCounter'

export default function Counter1() {
  
   const [Counter, increment, decremnt] =  useCounter(1000)

// let [Counter, setCounter] = useState(0);

// const increment =()=> {
//     setCounter(Counter + 1)
// }

// const decremnt =()=> {
//     setCounter(Counter -1)
// }

  return (
    <div>
        <h1>Counter1</h1>
        <p>Counter1: {Counter}</p>

    <button onClick={increment}>Increment</button>
    <button onClick={decremnt}>Decrement</button>
    </div>
  )
}
