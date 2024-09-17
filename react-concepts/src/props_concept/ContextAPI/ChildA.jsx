import React from 'react'
import ChildB from './ChildB'
import { data1 } from './Parent'

const ChildA = () => {
    //here the value of 'name' is received from "Parent.jsx" which is the parent component of "ChildA.jsx"
    return (
        <div>
            {/* <ChildB name = {name}/> */}
            {/* removing props from each nested components to apply contextAPI */}
            {/* <ChildB/> */}
            <data1.Consumer>
                {(age) => {
                    return <h2>My age is {age}.</h2>
                }}
            </data1.Consumer>
        </div>
    )
}

export default ChildA
