import React, { useState, useEffect } from 'react';
import { StandardNavBar } from '../components/NavBar/StandardNavBar';
import FishCard from '../components/Cards/FishCard/FishCard';

export const Browse = () => {

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

        return(
            <div>
                <div>
                    <StandardNavBar />
                </div>
                
                <br />
                
                <div className='fishCardGrid'>
                    {fishAPI.map((fishData, index) => (
                        <FishCard fishData={fishData} key={index} />
                    ))}
                </div>
            </div>
        );

    } else {
        return (
            <div>
                <StandardNavBar />
                <div>
                    <h1>Catching fish!</h1>
                    <h2>Please wait a moment...</h2>
                </div>
            </div>
        )
    }
}
