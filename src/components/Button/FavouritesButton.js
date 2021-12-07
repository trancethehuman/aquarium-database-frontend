import React, {useState} from "react"

const FavouritesButton = ({fishData}) => {

    const name = fishData.name;

    const data = JSON.stringify('JOEL');

    const sendRequest = () => {
        console.log(name) 
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type':'application/json'
            }
        }
    
        fetch('http://localhost:3001/favorites', options);
    }


    return <button onClick={sendRequest}>💖</button>
}

export default FavouritesButton;