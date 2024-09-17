import React from 'react'
import ExampleCarName from './ExampleCarName';
import ExampleCarInfo from './ExampleCarInfo';

const ExampleCarComponent = (props) => {
    const carInfo = "Model is 'Sonet'. It's the cheapest model of kia. More models are there like 'Seltos' and 'Carens'. "
    console.log("car component= ",props);
    //fetching data from other files using props
    const carName = "Kia";
    return (
        <div>
            <h1> Car components </h1>
            <ExampleCarName brand = "Kia" />
            <ExampleCarInfo carInfo = {carInfo}/>
        </div>
    )
}

export default ExampleCarComponent
