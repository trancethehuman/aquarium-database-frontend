import React from "react";
import './FishCard.css';

const FishCard = ({ fishData }) => {

    return (
        <div className='fishCard'>
            <div>
                <img className='fishPic' src={fishData.pic1} alt={fishData.name}/>
            </div>
            <div className='fishNames'>
                <h1 className='name'>{fishData.name}</h1>
                <h2 className='sciName'>{fishData.scientificName}</h2>
            </div>
            <div className='fishInfo'>
                <div className='sizeContainer'>
                    <h3 className='sizeHeader'>Size</h3>
                    <h3 className='fishSize'>{fishData.sizeCM} cm</h3>
                </div>
                <div className='careContainer'>
                    <h3 className='careHeader'>Care Level</h3>
                    <h3 className='fishCare'>{fishData.careLevel}</h3>
                </div>
            </div>
        </div>
    )
}

export default FishCard;