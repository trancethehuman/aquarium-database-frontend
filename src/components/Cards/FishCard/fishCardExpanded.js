import { useEffect, useState } from 'react';
import FishCard from './FishCard';
import './FishExpanded.css';

export const FishExpanded = () => {

    const [fishAPI, setFishAPI] = useState()

    useEffect(() => {
        fetch('http://localhost:3001/tetra').then((res) => {
            if (res.ok) {
                console.log(res)
                return res.json();
            }
        }).then(jsonResponse => setFishAPI(jsonResponse));
    }, [])

    if (fishAPI) {  
        return(
            <div className='fishCard'>
                <div className='fishHeader'>
                    <img className='fishImg'src={fishAPI[14].pic1} alt='Espes Rasbora'/>
                    <h1 className='fishName'>{fishAPI[14].name}</h1>
                    <h3 className='subName'>{fishAPI[14].scientificName}</h3>
                </div>
                <div className='fastFacts'>
                    <div className='temperament'>
                        <h2>{fishAPI[14].temperament}</h2>
                        <h1></h1>
                    </div>
                    <div className='parameters'>
                        <h2>Water Parameters</h2>
                        <p>Temperature: <b>{fishAPI[14].tempLowC}°C</b> - <b>{fishAPI[14].tempHighC}°C</b></p>
                        <p>pH Level: <b>{fishAPI[14].phLevelLow}</b> - <b>{fishAPI[14].phLevelHigh}</b></p>
                        <p>dH Level: <b>{fishAPI[14].dhLevelLow}°</b> - <b>{fishAPI[14].dhLevelHigh}°</b></p>
                    </div>
                    <div className='careLevel'>
                        <h2>Care level</h2>
                        <h1>{fishAPI[14].careLevel}</h1>
                    </div>
                </div>
                <div className='fishInfo'>
                    <div className='infoHeader'>
                        <h2>Fish Information</h2>
                    </div>
                    <div>
                        <h3>Size</h3>
                        <p><b>{fishAPI[14].sizeCM} cm</b> ({fishAPI[14].sizeIN} in)</p>
                    </div>
                    <div>
                        <h3>Diet Type</h3>
                        <p>{fishAPI[14].dietType}</p>
                    </div>
                    <div>
                        <h3>Origin</h3>
                        <p>{fishAPI[14].origin}</p>
                    </div>
                    <div>
                        <h3>Minimum Tank Size</h3>
                        <p><b>{fishAPI[14].tankSizeL} L</b> ({fishAPI[14].tankSizeG} G)</p>
                    </div>
                    <div>
                        <h3>Plants?</h3>
                        <p>{fishAPI[14].plants}</p>
                    </div>
                    <div>
                        <h3>Lifespan</h3>
                        <p>{fishAPI[14].lifespan} years</p>
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