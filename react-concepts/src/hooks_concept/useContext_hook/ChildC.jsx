import React from 'react'

const ChildC = ({name}) => {
    //here the value of 'name' is received from "ChildB.jsx" which is the parent component of "ChildC.jsx"
    return (
        <div>
            <h1> Componet C displaying {name}</h1>
            console.log("Componet C displaying ", name);
        </div>
    )
}

export default ChildC
