import React, { createContext } from 'react'
// import ChildA from './ChildA'
import ChildC from './ChildC';

//createContext() in context API
const data = createContext();
const Parent = () => {
    const name = "Sayan haldar";
    return (
        <div>
            {/* <ChildA name={name}/> */}
            {/* provider in contextAPI */}
            <data.Provider value={name}>
                <ChildC/>
            </data.Provider>
        </div>
    )
}

export default Parent
export {data};
