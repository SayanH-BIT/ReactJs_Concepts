import React from 'react'
import ChildB from './ChildB'

const ChildA = ({name}) => {
    //here the value of 'name' is received from "Parent.jsx" which is the parent component of "ChildA.jsx"
    return (
        <div>
            <ChildB name = {name}/>
        </div>
    )
}

export default ChildA
