import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increamentCount = () => {
   
    setCount(count+1);

   
    
  }
  
  return (
    <div>
      <h1> Create Counter</h1>
      <h3> Counter : {count} </h3>
      <button onClick={increamentCount}>Increament</button>
    </div>
  )
}
export default Counter