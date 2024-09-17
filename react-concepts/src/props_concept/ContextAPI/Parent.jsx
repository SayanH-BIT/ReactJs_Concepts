import React, { createContext } from 'react'
import ChildA from './ChildA'
import ChildC from './ChildC';

//createContext() in context API
const data = createContext();
const data1 = createContext();
const Parent = () => {
    const name = "Sayan haldar";
    const age = 22;
    return (
        <div>
            {/* <ChildA name={name}/> */}
            {/* provider in contextAPI */}
            <data.Provider value={name}>
                <ChildC/>
            </data.Provider>
            <data1.Provider value={age}>
                <ChildA/>
            </data1.Provider>
        </div>
    )
}

export default Parent
export {data, data1};
