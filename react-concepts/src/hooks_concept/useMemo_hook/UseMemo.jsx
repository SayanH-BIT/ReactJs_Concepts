import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(100);
    // function multi() {
    //     console.log("**************");
    //     return add * 10
    // }
    
    //in this case for both add & sub buttons this o/p is shwon in console. That's a issue
    //To solve it we use useMemo hook
    const multiply = useMemo(
        function multi() {
            console.log("**************");
            return add * 10
        }, [add]
        //it is written for that, only for add function this function will be called.
    )
    // function add(a, b) {
    //     return a+b;
    // }
    // function sub(a, b) {
    //     return a-b;
    // }
    return (
        <div>
            <h3> useMemo() Concept</h3>
            <p>{add}*10 = {multiply}</p>
            <button onClick={() => setAdd(add + 1)}>Addition</button>
            <span>{add}</span>
            <button style={{ marginLeft: "10%" }} onClick={() => setSub(sub - 1)}>Subtract</button>
            <span>{sub}</span>
        </div>
    )
}

export default UseMemo
