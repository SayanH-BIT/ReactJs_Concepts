import React from 'react'
import { data } from './HookParent'

const ChildR = () => {
    //here the value of 'name' is received from "ChildB.jsx" which is the parent component of "ChildR.jsx"
    return (
        <div>
            {/* <h1> Componet C displaying {name}</h1> */}
            {/* removing props from each nested components to apply contextAPI */}
            {/* consumer in contextAPI */}
        </div>
    )
}

export default ChildR
