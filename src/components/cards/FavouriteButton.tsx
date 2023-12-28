import { Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

import favouritesNo from '../images/favouritesNo.png'
import favouritesYes from '../images/favouritesYes.png'

import './FavouriteButton.css'


export function FavouriteButton({ houseId }: { houseId?: Number }) {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const storedPhone = localStorage.getItem('userPhone');
        const loggedIn = storedPhone && storedPhone?.length > 0 ? true : false;
        if (!loggedIn)
            return;
        //axios.get(`/chosen/${houseId}`)
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
        const storedPhone = localStorage.getItem('userPhone');
        const loggedIn = storedPhone && storedPhone?.length > 0 ? true : false;
        if (!loggedIn) {
            const openModalEvent = new Event('openModalLogin');
            document.dispatchEvent(openModalEvent);
            event.stopPropagation();
            return;
        }
        if (!isFavorite) {
            //axios.post('/chosen', { user_login: loggedIn, flat_id: houseId })
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
            //axios.delete('/chosen', { user_login: loggedIn, flat_id: houseId })
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