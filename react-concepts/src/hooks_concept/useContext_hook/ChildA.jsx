import React from 'react'
import ChildB from './ChildB'

const ChildA = () => {
    //here the value of 'name' is received from "Parent.jsx" which is the parent component of "ChildA.jsx"
    return (
        <div>
            {/* <ChildB name = {name}/> */}
            {/* removing props from each nested components to apply contextAPI */}
            <ChildB/>
        </div>
    )
}

export default ChildA
