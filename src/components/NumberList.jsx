import React from 'react'

function NumberList(){
    const numbers = [1,2,3,4,5,6]
    return(
        <div>
            <h1>Rendering List</h1>
        <ul>
            {numbers.map((number) => (
                <li key={number.toString()}>{number}</li>
            ))}
        </ul>
        </div>
    )
}

export default NumberList