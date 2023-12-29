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
                if (searchUrl === '?schoolsOnly=true') {
                    const schoolsResponse = await axios.get<PointsSchoolsOnMap[]>("https://retoolapi.dev/Wpxa0f/schoolcoords");
                    //const schoolsResponse = await axios.get<PointsSchoolsOnMap[]>("https://retoolapi.dev/zoluMf/schoolpoints");
                    if (!Array.isArray(schoolsResponse.data))
                        setPointsSchools([schoolsResponse.data]);
                    else
                        setPointsSchools(schoolsResponse.data);
                    setMapIsLoading(true);
                    return;
                }
                if (searchUrl === '?homesOnly=true') {
                    const homesResponse = await axios.get<PointsHousesOnMap[]>("https://retoolapi.dev/zNOy5M/houseinfocord");
                    //const homesResponse = await axios.get<PointsHousesOnMap[]>("https://retoolapi.dev/minnlU/homepoints");
                    if (!Array.isArray(homesResponse.data))
                        setPointsHomes([homesResponse.data]);
                    else
                        setPointsHomes(homesResponse.data);
                    setMapIsLoading(true);
                    return;
                }


                const homesResponse = await axios.get<PointsHousesOnMap[]>(`https://retoolapi.dev/bOu0Zi/houseinfo${searchUrl}`);
                const filterArray: PointsHousesOnMap[] = homesResponse.data.map((house) => {
                    const newObject: PointsHousesOnMap = {
                        id: house.id,
                        latitude: house.latitude,
                        longitude: house.longitude
                      };
                    return newObject;
                });
                if (!Array.isArray(filterArray))
                    setPointsHomes([filterArray]);
                else
                    setPointsHomes(filterArray);
                
                //const homesResponse = await axios.get<PointsHousesOnMap[]>(`https://retoolapi.dev/minnlU/homepoints${searchUrl}`);
                //const homesResponse = await axios.get<PointsHousesOnMap[]>("https://retoolapi.dev/minnlU/homepoints");
                // if (!Array.isArray(homesResponse.data))
                //     setPointsHomes([homesResponse.data]);
                // else
                //     setPointsHomes(homesResponse.data);

                const schoolsPar = searchParams.get('schools');
                const schoolsParArray = schoolsPar ? schoolsPar.split(",").map(Number) : [];
                const queryString = `?id=${schoolsParArray.join('&id=')}`;
                //такого не будет в api
                const schoolsResponse = await axios.get<PointsSchoolsOnMap[]>(`https://retoolapi.dev/Wpxa0f/schoolcoords${queryString}`);

                // const schoolResponse = await axios.get<PointsSchoolsOnMap[]>(`school/coords`);
                // let respArray: PointsSchoolsOnMap[] = [];
                // if (!Array.isArray(schoolResponse.data))
                //     respArray = [schoolResponse.data];
                // else
                //     respArray = schoolResponse.data;
                // const filteredRespArray = respArray.filter((point) => schoolsParArray.includes(point.id));
                // if (!Array.isArray(filteredRespArray))
                //     setPointsSchools([filteredRespArray]);
                // else
                //     setPointsSchools(filteredRespArray);
                // setMapIsLoading(true);


                //const schoolsResponse = await axios.get<PointsSchoolsOnMap[]>("https://retoolapi.dev/zoluMf/schoolpoints");
                if (!Array.isArray(schoolsResponse.data))
                    setPointsSchools([schoolsResponse.data]);
                else
                    setPointsSchools(schoolsResponse.data);
                setMapIsLoading(true);            
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