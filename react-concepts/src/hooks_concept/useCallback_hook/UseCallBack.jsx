import React, { useCallback, useState } from 'react'
import ChildCall from './ChildCall'

const UseCallBack = () => {
    const [add, setAdd] = useState(0)
    const [count, setCount] = useState(add)
    //for some condition we want to use re-rendering

    //omits re-rendering and only for 1st time it will be called in child component
    const CallBack = useCallback(() => {}, [count])
    return (
        <div>
            <h2>Learning useCallBack()</h2>
            <ChildCall CallBack = {CallBack}/>
            {/* here the child component is re-rendering unnecessaryly for every click on the button */}
            <button onClick={() => setAdd(add+1)}>Adding..</button>
            <p>{add}</p>
            <button onClick={() => setCount(add*10)}>Count</button>
            <p>{count}</p>
        </div>
    )
}

export default UseCallBack
