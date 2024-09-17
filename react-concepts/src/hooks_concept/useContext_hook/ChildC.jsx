import React from 'react'
import { data } from './Parent'

const ChildC = () => {
    //here the value of 'name' is received from "ChildB.jsx" which is the parent component of "ChildC.jsx"
    return (
        <div>
            {/* <h1> Componet C displaying {name}</h1> */}
            {/* removing props from each nested components to apply contextAPI */}
            {/* consumer in contextAPI */}
            <data.Consumer>
                {(name) => {    //function definition
                    return <h1>My name is {name}</h1>
                }}
            </data.Consumer>
        </div>
    )
}

export default ChildC
