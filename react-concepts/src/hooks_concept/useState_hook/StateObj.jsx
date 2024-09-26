//useState hook with object
import React, { useState } from 'react'


const StateObj = () => {
    const [nameVal, setNameVal] = useState({firstName: "SAYAN", lastName:"HALDAR"})
    function upDate() {
        setNameVal({firstName: "s/w ENGINEER"})
    }
    return (
        <div>
            <h2>My first Name is {nameVal.firstName} and Last name is {nameVal.lastName}</h2>
            <button onClick={upDate}>Modify</button>
        </div>
    )
}

export default StateObj
