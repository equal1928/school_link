import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, LatLngExpression, PointExpression, divIcon, icon, point } from "leaflet";
import { CloseButton, Container, Offcanvas, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

import { PointsHousesOnMap } from '../../models/PointsHousesOnMap'
import { PointsSchoolsOnMap } from '../../models/PointsSchoolsOnMap'
import { HouseCardLarge } from "../cards/HouseCardLarge";
import { HouseModelCard } from "../../models/HouseModelCard";
import { SchoolModelCard } from "../../models/SchoolModelCard";
import { SchoolCard } from "../cards/SchoolCard";

import "./SearchMap.css"


const customIconSize = [25, 30] as PointExpression;

const homeIcon = new Icon({
    iconUrl: require("../images/greyMarker.png"),
    iconSize: customIconSize
  });
const top5SchoolIcon = new Icon({
    iconUrl: require("../images/greenMarker.png"),
    iconSize: customIconSize
});
const top20SchoolIcon = new Icon({
    iconUrl: require("../images/blueMarker.png"),
    iconSize: customIconSize
});
const top56SchoolIcon = new Icon({
    iconUrl: require("../images/orangeMarker.png"),
    iconSize: customIconSize
});
const baseSchoolIcon = new Icon({
    iconUrl: require("../images/redMarker.png"),
    iconSize: customIconSize
});

enum TypeSchool {
    SCHOOL = 0,
    LYCEUM = 1,
    GYMNASIUM = 2,
    TOP = 3,
    INACTIVE = 4
}

// enum TypeSchool {
//     TOP5,
//     TOP20,
//     TOP56,
//     BASE
// }

// function getMarkerIcon(typeSchool: TypeSchool) {
//     //FIXME: переделать на switch, почему-то с ним неправильно приводит типы
//     if (typeSchool == TypeSchool.BASE)
//         return baseSchoolIcon;
//     if (typeSchool == TypeSchool.TOP5)
//         return top5SchoolIcon;
//     if (typeSchool == TypeSchool.TOP20)
//         return top20SchoolIcon;
//     if (typeSchool == TypeSchool.TOP56)
//         return top56SchoolIcon;
//     return baseSchoolIcon;
// }

enum TypePoint {
    NONE,
    HOME,
    SCHOOL
}

function getMarkerIcon(typeSchool: TypeSchool) {
    //FIXME: переделать на switch, почему-то с ним неправильно приводит типы
    if (typeSchool == TypeSchool.SCHOOL)
        return baseSchoolIcon;
    if (typeSchool == TypeSchool.LYCEUM)
        return top5SchoolIcon;
    if (typeSchool == TypeSchool.TOP)
        return top20SchoolIcon;
    if (typeSchool == TypeSchool.INACTIVE)
        return top56SchoolIcon;
    return baseSchoolIcon;
};


export function Map({ isMapPage = true, points }: { isMapPage?: boolean; 
                    points: { homes: PointsHousesOnMap[]; schools: PointsSchoolsOnMap[] } }) {
    const [showCard, setShowCard] = useState(false);
    const handleClose = () => { 
        setShowCard(false); 
        setCurrentTypePoint(TypePoint.NONE);
        setHomesCard([]);
        setScholCard(undefined);
     };
    const [loadingHomesCard, setLoadingHomesCard] = useState(false);
    const [homesCard, setHomesCard] = useState<HouseModelCard[]>([]);
    const [loadingScholsCard, setLoadingScholsCard] = useState(false);
    const [scholCard, setScholCard] = useState<SchoolModelCard>();
    const [currentTypePoint, setCurrentTypePoint] = useState<TypePoint>();

    const handleHomePointClick = (pointId: number[]) => {
        axios.get(`https://retoolapi.dev/cZVlG9/homeinfo?_page=1&_limit=4`)
            .then(response => {
                if (!Array.isArray(response.data))
                    setHomesCard([response.data]);
                else
                    setHomesCard(response.data);
                setLoadingHomesCard(true);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleSchoolPointClick = (pointId: number) => {
        axios.get(`https://retoolapi.dev/PlFJLm/scholinfo/${pointId}`)
            .then(response => {
                setScholCard(response.data);
                setLoadingScholsCard(true);
            })
            .catch(error => {
                console.error(error);
            });
    };


    const propsHome = points.homes;
    const propsSchool = points.schools;
    let MAP_CENTER: LatLngExpression =[56.838270, 60.603475]; 
    if (propsHome && propsHome.length > 0) 
        MAP_CENTER = [propsHome[0].latitude, propsHome[0].longitude];
    else if (propsSchool && propsSchool.length > 0)
        MAP_CENTER = [propsSchool[0].latitude, propsSchool[0].longitude];

    return (
        <div className="SearchMapContainer">
            <div className="mapOffcanvas" style={{ display: showCard ? 'block' : 'none' }}>
                <div className="titleList">
                    <h5 style={{ margin: 0}}>Объявления</h5>
                    <CloseButton className="closeButton" onClick={handleClose}/>
                </div>
                <div className="cardsListContainer">
                    {currentTypePoint === TypePoint.HOME ? (
                        !loadingHomesCard ? (
                            <Container className="spinnerContainer">
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </Container>
                        ) : (
                            <div className="cardWrapper">
                                {homesCard.map(homeCard => (
                                    <HouseCardLarge key={homeCard.id} card={homeCard}/>
                                ))}
                            </div>
                        )
                    ) : (
                        !loadingScholsCard ? (
                            <Container className="spinnerContainer">
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </Container>
                        ) : (
                            <div className="schoolCardContainer">
                                {scholCard && <SchoolCard card={scholCard}/>}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <MapContainer className="MapContainer" style={isMapPage ? {height: "90vh", width: "100vw"} : {height: "40vh", width: "90vw"}} center={MAP_CENTER} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}"
                    />
                    {propsHome.map(point => (
                        <Marker key={point.id} position={[point.latitude, point.longitude]} icon={homeIcon} eventHandlers={{
                            click: () => {
                                if (isMapPage)
                                    setShowCard(true);
                                setCurrentTypePoint(TypePoint.HOME);
                                handleHomePointClick([1,2,3]);
                            },
                            }}></Marker>
                    ))}
                    {propsSchool.map(point => (
                        <Marker key={point.id} position={[point.latitude, point.longitude]} 
                                icon={getMarkerIcon(point.typeSchool)} eventHandlers={{
                            click: () => {
                                if (isMapPage)
                                    setShowCard(true);
                                setCurrentTypePoint(TypePoint.SCHOOL);
                                handleSchoolPointClick(point.schoolId);
                            },
                            }}></Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    )
}