import React from 'react'
import ChildC from './ChildC'

const ChildB = ({name}) => {
    //here the value of 'name' is received from "ChildA.jsx" which is the parent component of "ChildB.jsx"
    return (
        <div>
            <ChildC name = {name}/>
        </div>
    )
}

export default ChildB
