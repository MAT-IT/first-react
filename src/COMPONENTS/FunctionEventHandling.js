import React from 'react'

export default function FunctionEventHandling() {
    const clikHandler=()=>{
console.log("Tiklandi")
    }
    return (
        <div>
           <button onClick={clikHandler}>Tiklandi</button> 
        </div>
    )
}
