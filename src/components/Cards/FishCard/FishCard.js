import React from "react";
import './FishCard.css';
import { useAuth0 } from "@auth0/auth0-react";
import FavoritesButton from '../../Button/FavoritesButton';

const FishCard = ({ fishData }) => {
    console.log(fishData)
    const { isAuthenticated } = useAuth0()

    return (
        <div className='fishCardBrowse'>
            <div>
                <img className='fishCardPic' src={fishData.pic1} alt={fishData.name}/>
            </div>
            <div className='fishCardNames'>
                <h1 className='name'>{fishData.name}</h1>
                <h2 className='sciName'>{fishData.scientificName}</h2>
                {isAuthenticated && <FavoritesButton fishData={fishData}/>}
            </div>
            <div className='fishCardInfo'>
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