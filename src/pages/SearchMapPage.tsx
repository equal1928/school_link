import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from "react"
import { Button, Container, Offcanvas, Spinner } from 'react-bootstrap'

import { Header } from '../components/header/Header'
import { SearchFiltersBlock } from '../components/filtersBlock/SearchFiltersBlock'
import { Map } from '../components/map/Map'
import { PointsHousesOnMap } from '../models/PointsHousesOnMap';
import { PointsSchoolsOnMap } from '../models/PointsSchoolsOnMap';
import { TypeSchoolsPopup } from '../components/map/TypeSchoolsPopup';
import {Disclaimer} from "../components/disclaimer/Disclaimer";

import './SearchMapPage.css'
import '../components/cards/Cards.css'


export function SearchMapPage() {
    const [PointsHomes, setPointsHomes] = useState<PointsHousesOnMap[]>([]);
    const [PointsSchools, setPointsSchools] = useState<PointsSchoolsOnMap[]>([]);
    const [mapIsLoading, setMapIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const searchUrl = window.location.search;
                const searchParams = new URLSearchParams(searchUrl);
                if (searchParams.get('schoolsOnly') !== 'true') {
                    const homesResponse = await axios.get<PointsHousesOnMap[]>("https://retoolapi.dev/minnlU/homepoints");
                    //const homesResponse = await axios.get<PointsHousesOnMap[]>(`https://retoolapi.dev/minnlU/homepoints${searchUrl}`);
                    if (!Array.isArray(homesResponse.data))
                        setPointsHomes([homesResponse.data]);
                    else
                        setPointsHomes(homesResponse.data);

                    const schoolsPar = searchParams.get('schools');
                    const schoolsParArray = schoolsPar ? schoolsPar.split(",").map(Number) : [];
                    const queryString = `?schoolIds=${encodeURIComponent(schoolsParArray.join(','))}`;
                    const schoolsResponse = await axios.get<PointsSchoolsOnMap[]>("https://retoolapi.dev/zoluMf/schoolpoints");
                    //const schoolsResponse = await axios.get<PointsSchoolsOnMap[]>(`https://retoolapi.dev/zoluMf/schoolpoints${queryString}`);
                    if (!Array.isArray(schoolsResponse.data))
                        setPointsSchools([schoolsResponse.data]);
                    else
                        setPointsSchools(schoolsResponse.data);
                    setMapIsLoading(true);
                } else {
                    const schoolsResponse = await axios.get<PointsSchoolsOnMap[]>("https://retoolapi.dev/zoluMf/schoolpoints");
                    if (!Array.isArray(schoolsResponse.data))
                        setPointsSchools([schoolsResponse.data]);
                    else
                        setPointsSchools(schoolsResponse.data);
                    setMapIsLoading(true);
                }
            } catch (error) {
                console.error(error);
                setMapIsLoading(true);
            }
        };
      
        fetchData();
    }, []);

    const navigate = useNavigate();
    function handleClick() {
        const searchUrl = window.location.search;
        navigate(`/search-list${searchUrl}`);
    }

    return (
        <div>
            <Header />
            <SearchFiltersBlock />
            {/*<Disclaimer />*/}
            <div className="SearchMapContainer">
                {!mapIsLoading ? (
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