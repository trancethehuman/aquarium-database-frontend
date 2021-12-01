import { useEffect, useState } from 'react';
import './FishExpanded.css';

export const FishExpanded = () => {

    const [fishAPI, setFishAPI] = useState()

    useEffect(() => {
        fetch('http://localhost:3001/goldfish').then((res) => {
            if (res.ok) {
                console.log(res)
                return res.json();
            }
        }).then(jsonResponse => setFishAPI(jsonResponse));
    }, [])
    
    if (fishAPI) {
        return (
            <div className='fishCard'>
                <div className='fishHeader'>
                    <img className='fishImg'src={fishAPI.pic1} alt='Espes Rasbora'/>
                    <h1 className='fishName'>{fishAPI.name}</h1>
                    <h3 className='subName'>{fishAPI.scientificName}</h3>
                </div>
                <div className='fastFacts'>
                    <div className='temperament'>
                        <h2>{fishAPI.temperament}</h2>
                        <h1></h1>
                    </div>
                    <div className='parameters'>
                        <h2>Water Parameters</h2>
                        <p>Temperature: <b>{fishAPI.tempLowC}°C</b> - <b>{fishAPI.tempHighC}°C</b></p>
                        <p>pH Level: <b>{fishAPI.phLevelLow}</b> - <b>{fishAPI.phLevelHigh}</b></p>
                        <p>dH Level: <b>{fishAPI.dhLevelLow}°</b> - <b>{fishAPI.dhLevelHigh}°</b></p>
                    </div>
                    <div className='careLevel'>
                        <h2>Care level</h2>
                        <h1>{fishAPI.careLevel}</h1>
                    </div>
                </div>
                <div className='fishInfo'>
                    <div className='infoHeader'>
                        <h2>Fish Information</h2>
                    </div>
                    <div>
                        <h3>Size</h3>
                        <p><b>{fishAPI.sizeCM} cm</b> ({fishAPI.sizeIN} in)</p>
                    </div>
                    <div>
                        <h3>Diet Type</h3>
                        <p>{fishAPI.dietType}</p>
                    </div>
                    <div>
                        <h3>Origin</h3>
                        <p>{fishAPI.origin}</p>
                    </div>
                    <div>
                        <h3>Minimum Tank Size</h3>
                        <p><b>{fishAPI.tankSizeL} L</b> ({fishAPI.tankSizeG} G)</p>
                    </div>
                    <div>
                        <h3>Plants?</h3>
                        <p>{fishAPI.plants}</p>
                    </div>
                    <div>
                        <h3>Lifespan</h3>
                        <p>{fishAPI.lifespan} years</p>
                    </div>
                </div>    
            </div>
        )
    } else {
        return (
            <div>
                <h1>Catching fish!</h1>
                <h2>Please wait a moment...</h2>
            </div>
        )
    }
}