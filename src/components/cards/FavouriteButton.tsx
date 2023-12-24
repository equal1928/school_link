import { Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

import favouritesNo from '../images/favouritesNo.png'
import favouritesYes from '../images/favouritesYes.png'

import './FavouriteButton.css'


export function FavouriteButton({ houseId }: { houseId?: Number }) {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        axios.get(`https://retoolapi.dev/Jcozs1/favourites/${houseId}`)
            .then(response => {
                if (response.status === 200)
                    setIsFavorite(true);
            })
            .catch(error => {
                console.error(error);
            });
    }, [houseId]);

    const handleFavouriteClick = (event: React.MouseEvent<HTMLElement>) => {
        //axios.post('https://retoolapi.dev/Jcozs1/favourites', { userId: 'ВАШ_USER_ID', houseId })
        if (!isFavorite) {
            axios.post('https://retoolapi.dev/Jcozs1/favourites', { id: houseId })
                .then(response => {
                    if (response.status === 201) {
                        setIsFavorite(true);
                    }
                })
                .catch(error => {
                    console.error(error);
            });
        } else {
            axios.delete(`https://retoolapi.dev/Jcozs1/favourites/${houseId}`)
            .then(response => {
                if (response.status === 200)
                    setIsFavorite(false);
            })
            .catch(error => {
                console.error(error);
            });
        }

    event.stopPropagation();
    };

    return (
        <>
            <button className="favouriteButton" onClick={handleFavouriteClick}>
                <Image src={isFavorite ? favouritesYes : favouritesNo}></Image>
            </button>
        </>
    );
}