import React, { memo } from 'react'

const ChildCall = (CallBack) => {
    console.log("Child component in callback");
    
    return (
        <>

        </>
    )
}

export default memo(ChildCall)
//memo is added to overcome the unnecessary re-rendering problem
//But on the other hand, if using props method a function is called then the re-rendering issue will rise again
//referencial equality -> to solve use useCallback()