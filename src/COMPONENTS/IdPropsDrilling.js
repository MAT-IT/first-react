import React from 'react'

function IdPropsDrilling(props) {
    return (
        <div>
            {props.children}
          <p>Name:{props.name}</p>  
          <p>Surname:{props.surname}</p>
         
        </div>
    )
}

export default IdPropsDrilling
