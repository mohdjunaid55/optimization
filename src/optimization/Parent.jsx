import React, { useCallback, useState } from 'react'
import Child from './Child'

export default function Parent() {
    console.log("parent component");
     let [counter, setCounter] = useState(0);

    //  const increment = ()=> {
    //     setCounter(counter + 1)
    //  }

// function rerenadr
     const increment = useCallback(()=> {
        setCounter((prevValue) => prevValue +1)
     }, [])


  return (
    <div> 
        {/* <p>Parent</p> */}
        <p>counter : {counter}</p>
        {/* <button onClick={increment}>Incremnt</button> */}
        <Child increment = {increment}/>
    </div>
  )
}
