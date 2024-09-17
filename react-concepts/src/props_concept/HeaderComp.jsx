import React from 'react'

const HeaderComp = (props) => {     //passing the props method through that function mention in Props1.jsx
    console.log("props= ", props);
    /* o/p => props=  {name: 'Haldar'}
    name : "Haldar" 
    [[Prototype]]: Object
    */
    return (
        <div>
            <h1> This is the header component. </h1>
            <h2>  Hello {props.name} </h2>
        </div>
    )
}

export default HeaderComp

/*
function add(a) {
    return a+a
}
add(5)
*/