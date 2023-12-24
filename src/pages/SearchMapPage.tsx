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
            const homesResponse = await axios.get<PointsHousesOnMap[]>("https://retoolapi.dev/minnlU/homepoints");
            setPointsHomes(homesResponse.data);
            const schoolsResponse = await axios.get<PointsSchoolsOnMap[]>("https://retoolapi.dev/zoluMf/schoolpoints");
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
        navigate('/search-list');
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