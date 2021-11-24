import React, { useEffect, useState } from 'react';
import './FilterButton.css';

//Button to filter fish!
//Takes a label, and an object (filter criterion)
export const FilterButton = ({label, filterCriterion}) => {
    const [filtered, setFilter] = useState(false);
    useEffect(() => {
        if (filtered === true) {
            //send state object to filter API, and get back new results to display
        }
    },[filtered])
    return(
        <button className='FilterButton' onClick={() => setFilter(!filtered)}>
            <p>{label}</p>
        </button>
    );
}