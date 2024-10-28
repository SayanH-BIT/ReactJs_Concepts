import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decre, incre } from './CounterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(incre)}>Increment Value</button>
            <p>{count}</p>
            <button onClick={() => dispatch(decre)}>Decrement Value</button>
            <p>{count}</p>
        </div>
    )
}

export default Counter
