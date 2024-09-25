import React from 'react'

const ParentState = () => {
    var num = 10;
    function updateState(){
        num = 15
    };
    console.log(num);
    return (
        <div>
            <h2>Learning State {num}</h2>
            <button onClick={updateState}>Click It!</button>
        </div>
    )
}

export default ParentState