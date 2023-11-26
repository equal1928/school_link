import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from "react"
import { Button, Container, Offcanvas, Spinner } from 'react-bootstrap'

import { Header } from '../components/header/Header'
import { FiltersList } from '../components/filtersBlock/FiltersList'
import { Map } from '../components/map/Map'
import { PointsHousesOnMap } from '../models/PointsHousesOnMap';
import { PointsSchoolsOnMap } from '../models/PointsSchoolsOnMap';

import '../components/filtersBlock/FiltersContainerSearch.css'
import './SearchMapPage.css'
import '../components/cards/Cards.css'
import { TypeSchoolsPopup } from '../components/map/TypeSchoolsPopup';


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
    const [PointsHomes, setPointsHomes] = useState<PointsHousesOnMap[]>([]);
    const [PointsSchools, setPointsSchools] = useState<PointsSchoolsOnMap[]>([]);
    const [mapIsLoading, setMapIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const homesResponse = await axios.get<PointsHousesOnMap[]>("https://retoolapi.dev/minnlU/homepoints");
            setPointsHomes(homesResponse.data);
            const schoolsResponse = await axios.get<PointsSchoolsOnMap[]>("https://retoolapi.dev/zoluMf/schoolpoints");
            setPointsSchools(schoolsResponse.data);
            setMapIsLoading(false);
          } catch (error) {
            console.error(error);
            setMapIsLoading(false);
          }
        };
      
        fetchData();
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
                            <Button variant="light" onClick={handleClick}>Показать объекты списком</Button>
                            <TypeSchoolsPopup />
                        </div>
                        <Map points={{ homes: PointsHomes, schools: PointsSchools }} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchMapPage; 