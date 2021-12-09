import React, { useState, useEffect } from 'react';
import { StandardNavBar } from '../../components/Bars/StandardNavBar';
import FishCard from '../../components/Cards/FishCard/FishCard';
import FilterBar from '../../components/Bars/FilterBar';
import './browse.css';

export const Browse = ({ searchTerm, getSearchTerm }) => {

    const [fishAPI, setFishAPI] = useState()
    // const [searchTerm, setSearchTerm] = useState();
    const [filterCriterion, setFilterCriterion] = useState();

    useEffect(() => {
        fetch('http://localhost:3001/goldfish').then((res) => {
            if (res.ok) {
                console.log(res)
                return res.json();
            }
        }).then(jsonResponse => {
            setFishAPI(jsonResponse)
        });
    }, [])

    // const getSearchTerm = (searchTerm) => {
    //     setFilterCriterion()
    //     console.log(searchTerm)
    //     setSearchTerm(searchTerm);
    // }

    const getFilterCriterion = (criterion) => {
        // setSearchTerm()
        setFilterCriterion(criterion);
        console.log(criterion)
    }

    if (fishAPI) {

        return(
            <div>
                <div>
                    <StandardNavBar getSearchTerm={getSearchTerm}/>
                </div>
                
                <br />

                <div>
                    <FilterBar getFilterCriterion={getFilterCriterion}/>
                </div>

                {!searchTerm && !filterCriterion &&
                <div className='fishCardGrid'>
                    {fishAPI.map((fishData, index) => (
                        <FishCard fishData={fishData} key={index} />
                    ))}
                </div>}
                
                {searchTerm && 
                <div className='fishCardGrid'>
                    {fishAPI.filter((fishData) => {
                        if (fishData.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return fishData; 
                        }
                    }).map((fishData, index) => (
                        <FishCard fishData={fishData} key={index} />
                    ))}
                </div>}


                {filterCriterion && 
                <div className='fishCardGrid'>
                    {fishAPI.filter((fishData) => {
                        if (fishData.careLevel.toLowerCase().includes(filterCriterion.toLowerCase())) {
                            return fishData;
                        } else if (fishData.plants.toLowerCase() === filterCriterion.toLowerCase()) {
                            return fishData;
                        }
                    }).map((fishData, index) => (
                        <FishCard fishData={fishData} key={index} />
                    ))}
                </div>}
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
