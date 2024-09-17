import React from 'react'
import ChildA from './ChildA'

const Parent = () => {
    const name = "Sayan haldar";
    return (
        <div>
            <ChildA name={name}/>
        </div>
    )
}

export default Parent
