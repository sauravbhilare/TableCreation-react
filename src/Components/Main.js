import React from 'react';
import { useState } from 'react';

function Main() {
  const [Fruit, setFruits] = useState("Apple");

const changeFrouit=()=>{
  setFruits("Watermelon");
}
  return (
    <div>
     <h1>State Example</h1>
     <h3>{Fruit}</h3>
     <button onClick={changeFrouit}>Change Fruit</button>
    </div>
  );
}

export default Main