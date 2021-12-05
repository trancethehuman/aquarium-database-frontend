import React, { useEffect, useState } from 'react';
import './FilterButton.css';

//Button to filter fish!
//Takes a label, and an object (filter criterion)
export const FilterButton = ({label, filterCriterion, getFilterCriterion}) => {
    // const [filtered, setFilter] = useState(false);
    // useEffect(() => {
    //     if (filtered === true) {
            
    //     }
    // },[filtered])
    return(
        <button className='FilterButton' onClick={() => getFilterCriterion(filterCriterion)}>
            <p>{label}</p>
        </button>
    );
}