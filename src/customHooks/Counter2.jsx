import React, { useState } from 'react'


export default function Counter2() {

    let [Counter, setCounter] = useState(0);

    const increment =()=> {
        setCounter(Counter + 1)
    }
    
    const decremnt =()=> {
        setCounter(Counter -1)
    }
    
    
      return (
        <div>
            <h1>Counter2</h1>

            <p>Counter2: {Counter}</p>
    
        <button onClick={increment}>Increment</button>
        <button onClick={decremnt}>Decrement</button>
        </div>
      )
}
