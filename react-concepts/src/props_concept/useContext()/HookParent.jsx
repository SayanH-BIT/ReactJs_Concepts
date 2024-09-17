import React, { createContext } from 'react'
import ChildP from './ChildP'
import ChildR from './ChildR';
import ChildQ from './ChildQ';

//createContext() in context API
const hookData = createContext();
const hookData1 = createContext();
const HookParent = () => {
    const name = "Sayan haldar";
    const gender = "male";
    return (
        <div>
            {/* <ChildP name={name}/> */}

            {/* provider in contextAPI */}

            {/* provider in useContext() */}
            <hookData.Provider value={name}>
                <hookData1.Provider value={gender}>
                    <ChildQ />
                </hookData1.Provider>
            </hookData.Provider>
        </div>
    )
}

export default HookParent
export { hookData, hookData1 };
