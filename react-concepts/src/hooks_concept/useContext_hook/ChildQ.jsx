import React, { useContext } from 'react'
import ChildR from './ChildR'
import { hookData, hookData1 } from './HookParent'

const ChildQ = () => {
    const name = useContext(hookData);
    const gender = useContext(hookData1);
    return (
        <div>
            {/* <ChildC name = {name}/> */}
            {/* removing props from each nested components to apply contextAPI */}
            {/* <ChildR/> */}
            <h3> Hi, Myself {name}, My gender is {gender}.</h3>
            
        </div>
    )
}

export default ChildQ
