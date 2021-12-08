import React, { useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"

const FavList = () => {
    const { user, isAuthenticated } = useAuth0()
    const [userFavs, setUserFavs] = useState() 

    useEffect(() => {

        if (isAuthenticated) {
            const data = {
                user: user.email
            }

            console.log(data)

            fetch('http://localhost:3001/favlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            }).then((res) => {
                if (res.ok) {
                    return res.json();
                }
            }).then(jsonResponse => {
                setUserFavs(jsonResponse)
            })
        }

    }, [isAuthenticated])

    return(
        <div>
            <h1>My Favorites</h1>
            {!isAuthenticated && <p>Catching your favorite fish...</p>}
            {isAuthenticated && userFavs && userFavs.map((userData, index) => (
                <img src={userData.pic}/>
            ))}
        </div>
    )
}

export default FavList;