import React from 'react'

function InputField() {
    const handleChange = (event) =>{
        console.log('Current value : ' ,event.target.value)
    }
    return(
        <div>
            <h1>Synthetic Event</h1>
            <input type=" text" onChange={handleChange} />
        </div>
    )
}
export default InputField;