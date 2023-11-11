import { Header } from '../components/header/Header'
import { FiltersList } from '../components/filtersBlock/FiltersList'
import { Map } from '../components/map/Map'

import '../components/cards/Cards.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, Offcanvas, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import '../components/filtersBlock/FiltersContainerSearch.css'
import './SearchMapPage.css'

const points = [
    {
        id: 1,
        latitude: 56.849796,
        longitude: 60.578488,
        apartmentIds: 1
    },
    {
        id: 2,
        latitude: 56.848270,
        longitude: 60.528488,
        apartmentIds: [
            1,
            2,
            3
        ]
    },
    {
        id: 3,
        latitude: 56.818270,
        longitude: 60.563475,
        apartmentIds: [
            1,
            2,
            3
        ]
    },
    {
        id: 4,
        latitude: 56.878270,
        longitude: 60.693475,
        apartmentIds: [
            1,
            2,
            3
        ]
    },
    {
        id: 5,
        latitude: 56.858270,
        longitude: 60.653475,
        apartmentIds: [
            1,
            2,
            3
        ]
    },
    {
        id: 6,
        latitude: 56.888270,
        longitude: 60.603475,
        apartmentIds: [
            1,
            2,
            3
        ]
    },
    {
        id: 7,
        latitude: 56.818270,
        longitude: 60.693475,
        apartmentIds: [
            1,
            2,
            3
        ]
    },
    {
        id: 8,
        latitude: 56.848270,
        longitude: 60.663475,
        apartmentIds: [
            1,
            2,
            3
        ]
    },
]


export function SearchMapPage() {
    const [Points, setPoints] = useState([]);
    const [mapIsLoading, setMapIsLoading] = useState(true);

    useEffect(() => {
        axios.get("https://retoolapi.dev/cpL8ts/data").then(response => {
            setPoints(response.data);
            setMapIsLoading(false)
        }).catch(error => {
            console.error(error);
            setMapIsLoading(false)
        });
    }, []);

    const navigate = useNavigate();
    function handleClick() {
        navigate('/search-list');
    }

    return (
        <div>
            <Header />
            <FiltersList />
            <div className="SearchMapContainer">
                {mapIsLoading ? (
                    <Container className="SpinnerMapLoading">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Container>
                ) : (
                    <div>
                        <div className="showListButton">
                            <Button onClick={handleClick}>Показать объекты списком</Button>
                        </div>
                        <Map points={Points} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchMapPage; 