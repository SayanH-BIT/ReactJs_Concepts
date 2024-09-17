import React from 'react'
import ChildQ from './ChildQ'
import { data1 } from './HookParent'

const ChildP = () => {
    //here the value of 'name' is received from "Parent.jsx" which is the parent component of "ChildP.jsx"
    return (
        <div>
            {/* <ChildQ name = {name}/> */}
            {/* removing props from each nested components to apply contextAPI */}
            {/* <ChildQ/> */}
        </div>
    )
}

export default ChildP
