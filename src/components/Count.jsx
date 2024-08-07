import React, { useState } from "react";

function Counter(){
    const [count, setcount] = useState(0);
    return<div>
        <h1>States</h1>
        <p>Count :{count} </p>
        <button onClick={() =>setcount(count + 1)}>Increment</button>
        <button onClick={() =>setcount(count - 1)}>Decrement</button>
        <button onClick={() =>setcount(0)}>Reset</button>
    </div>
}
export default Counter