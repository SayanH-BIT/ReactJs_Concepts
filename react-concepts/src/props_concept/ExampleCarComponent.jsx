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


/*
    //Lets discuss here
    1stly,
    the "brand name" and the "carInfo" is written in the 'ExampleCarComponent' file which is called to main file -> 'App.js'

    2ndly,
    the "brand name" and "carInfo" are called as a props in 'ExampleCarName' and 'ExampleCarInfo' files accoringly as props functions

    Thus, the values are accessed to those files using {props.brand} & {props.carInfo}
*/