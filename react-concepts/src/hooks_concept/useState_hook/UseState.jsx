import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)
    //accepts only one value, '0' is initial value here
    //returns two vairables / current states (defined as count, setCount)
    function updateCount() {
        setCount(count + 1)
    }
    return (
        <div>
            <h2> Learning the useState()</h2>
            <button onClick={updateCount}>Click</button>
            <p> button is clicked {count} times.</p>
            <button onClick={() => {
                setCount (0)
            }}>Reset</button>
        </div>
    )
}

export default UseState
