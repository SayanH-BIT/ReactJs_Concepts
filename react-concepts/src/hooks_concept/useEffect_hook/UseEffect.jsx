import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState();
    useEffect(() => {
        console.log("component mounted");
        //page loading everytime, then this cmd rendered or shown in console.
    }, [data]);
    function upDateCount() {
        setCount(count + 1)
    };
    const upDateData = () => {
        setData("Haldar")
        console.log("Haldar")
    };
    return (
        <div>
            <h2>useEffect Hook concept</h2>
            <button onClick={upDateCount}>Count +</button>
            <p>Counting {count} times.</p>
            <button onClick={() => {setCount(0)}}>Reset</button>
            <p></p>
            <button onClick={upDateData}>Update</button>
        </div>
    )
}

export default UseEffect
