import React, {useMemo, useState } from 'react'
// import Parent from './Parent'

export default function App() {
    let [counter, setCounter] = useState(0);

 const sum = () => {
    let s = 0;

    for(let num = 0; num<10000; num++){
        s+= num;
        console.log(s);
    }
    return s;
 }

 let t =  useMemo(sum, [])

  return (
    <div>
    {/* <Parent></Parent> */}  
  <p>Counter : {counter}</p>
  <p>sum : {t}</p>
   <button onClick={()=> setCounter(counter + 1)}>Increment</button>
   </div>
  )
}
