 import { useState } from "react";

 export const useCounter =(value)=>{
let [Counter, setCounter] = useState(value ?? 0);

const increment =()=> {
    setCounter(Counter + 1)
}

const decremnt =()=> {
    setCounter(Counter -1)
}

return [Counter, increment, decremnt]
}