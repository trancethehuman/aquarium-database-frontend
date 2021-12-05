import React, { useState } from "react";

const TankSizeCalculator = () => {

    const [length, setLength] = useState();
    const [width, setWidth] = useState();
    const [depth, setDepth] = useState();
    const [tankVolume, setTankVolume] = useState();

    const [unit, setUnit] = useState(true);
    const [unitString, setUnitString] = useState('Inches');
    const [outputString, setOutputString] = useState('Liters');

    const getVolume = () => {

        const volume = length * width * depth
        
        if (unit === true) {
            // inch
            setTankVolume(volume / 1000);
            ;
        } else {
            // cm
            setTankVolume(volume / 231);
        }
    }

    const unitSwitch = () => {
        if (unit === true) {
            setUnit(false)
            setUnitString('Inches');
            setOutputString('Gallons')
            
        } else {
            setUnit(true);
            setUnitString('Centimeters')
            setOutputString('Liters')
        }
    }

    return (
        <div>
            <h1>Tank Size Calculator</h1>

            <button onClick={unitSwitch}>Use {unitString}</button>

            <input type="number" placeholder="Length" onChange={(event) => {
                setLength(event.target.value);
            }}></input>
            <input type="number" placeholder="Width" onChange={(event) => {
                setWidth(event.target.value);
            }}></input>
            <input type="number" placeholder="Depth" onChange={(event) => {
                setDepth(event.target.value);
            }}></input>

            <button onClick={getVolume}>Calculate Volume!</button>

            {tankVolume && <h1>{tankVolume.toFixed(2)} {outputString}</h1>}
        </div>
    )
}

export default TankSizeCalculator;