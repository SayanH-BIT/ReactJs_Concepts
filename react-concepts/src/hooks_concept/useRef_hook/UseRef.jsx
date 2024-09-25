import React, { useRef, useState } from 'react'

const UseRef = () => {
    const refEle = useRef("");
    const [name, setName] = useState("Haldar");
    console.log(refEle);
    const handleInput = () => {
        refEle.current.style.color = 'red'
        refEle.current.value = "Sayan"
    };

    return (
        <div>
            <h2> Learning useRef()</h2>
            <input ref={refEle} type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() =>{
                setName("")
                refEle.current.focus()
                //it is used to maintain the focus in the text box
            }}> Clear</button>
            <p></p>
            <button onClick={handleInput}>handleInput</button>
        </div >
    )
}

export default UseRef
