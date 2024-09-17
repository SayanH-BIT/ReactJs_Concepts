//Props are used to transfer data from one component to another component

//Props are read only.

//These are just like a function in JavaScript

//props are passed as an object

import React from 'react'
import HeaderComp from './props_drilling/HeaderComp'

const Props1 = () => {
    return (
        <div>
            {/* assigning a variable value to a function */}
            <HeaderComp name="Sayan"/>
            <HeaderComp name="Haldar"/>
            <HeaderComp name="SayanBIT"/>
        </div>
    )
}

export default Props1
