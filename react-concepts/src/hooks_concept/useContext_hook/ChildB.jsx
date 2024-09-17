import React from 'react'
import ChildC from './ChildC'

const ChildB = () => {
    //here the value of 'name' is received from "ChildA.jsx" which is the parent component of "ChildB.jsx"
    return (
        <div>
            {/* <ChildC name = {name}/> */}
            {/* removing props from each nested components to apply contextAPI */}
            <ChildC/>
        </div>
    )
}

export default ChildB
