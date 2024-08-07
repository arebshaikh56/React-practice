import React, { useState } from 'react'

function ToggleButton(){
    const[isOn,setisOn] = useState(false);
    return(
        <div>
            <h1>Ternary Operator</h1>
            <button onclick={()=> setisOn(!isOn)}>
                {isOn?'Turn Off' : 'Turn On'}
            </button>
            <p>The Light is {isOn?'On': 'Off'}</p>
        </div>
    )
}
export default ToggleButton