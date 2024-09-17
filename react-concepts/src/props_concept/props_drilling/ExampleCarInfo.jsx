import React from 'react'
import ExampleCarComponent from './ExampleCarComponent'

const ExampleCarInfo = (props) => {
    return (
        <div>
            <h3> It's a {props.carInfo} </h3>
        </div>
    )
}

export default ExampleCarInfo
