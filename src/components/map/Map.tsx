import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, LatLngExpression, PointExpression, divIcon, icon, point } from "leaflet";
import { CloseButton, Container, Offcanvas, Spinner } from "react-bootstrap";
import { useState } from "react";
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
    iconUrl: require("../images/redMarker.png"),
    iconSize: customIconSize
  });

const baseSchoolIcon = new Icon({
    iconUrl: require("../images/blueMarker.png"),
    iconSize: customIconSize
});

const topSchoolIcon = new Icon({
    iconUrl: require("../images/greenMarker.png"),
    iconSize: customIconSize
});
const goodSchoolIcon = new Icon({
    iconUrl: require("../images/orangeMarker.png"),
    iconSize: customIconSize
});

// const lyceumIcon = new Icon({
//     iconUrl: require("../images/lyceumMarker.png"),
//     iconSize: customIconSize
// });

const hoverIcon = new Icon({
    iconUrl: require("../images/hoverMarker.png"),
    iconSize: customIconSize
});

const inactiveIcon = new Icon({
    iconUrl: require("../images/inactiveMarker.png"),
    iconSize: customIconSize
});

enum TypeSchool {
    SCHOOL = 0,
    LYCEUM = 1,
    GYMNASIUM = 2,
    TOP = 3,
    INACTIVE = 4
}

enum TypePoint {
    NONE,
    HOME,
    SCHOOL
}

function getMarkerIcon(typeSchool: TypeSchool) {
    //FIXME: переделать на switch, почему-то с ним неправильно приводит типы
    if (typeSchool
        == TypeSchool.SCHOOL)
        return baseSchoolIcon;
    if (typeSchool == TypeSchool.LYCEUM)
        return goodSchoolIcon;
    if (typeSchool == TypeSchool.TOP)
        return topSchoolIcon;
    if (typeSchool == TypeSchool.INACTIVE)
        return inactiveIcon;
    return inactiveIcon;
  }


export function Map({ points }: { points: { homes: PointsHousesOnMap[]; schools: PointsSchoolsOnMap[] } }) {
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
    const MAP_CENTER: LatLngExpression = propsHome && propsHome.length 
                                        ? [propsHome[0].latitude, propsHome[0].longitude] 
                                        : [56.838270, 60.603475];
    return (
        <div className="SearchMapContainer">
            <div className="mapOffcanvas" style={{ display: showCard ? 'block' : 'none' }}>
                <div className="titleList">
                    <p style={{ margin: 0}}>Объявления</p>
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
                            <div>
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
                            <div>
                                {scholCard && <SchoolCard card={scholCard}/>}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <MapContainer className="MapContainer" center={MAP_CENTER} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MarkerClusterGroup chunkedLoading>
                        {propsHome.map(point => (
                            <Marker key={point.id} position={[point.latitude, point.longitude]} icon={homeIcon} eventHandlers={{
                                click: () => {
                                    setShowCard(true);
                                    setCurrentTypePoint(TypePoint.HOME);
                                    handleHomePointClick([1,2,3]);
                                },
                              }}></Marker>
                        ))}
                    </MarkerClusterGroup>
                    {propsSchool.map(point => (
                        <Marker key={point.id} position={[point.latitude, point.longitude]} 
                                icon={getMarkerIcon(point.typeSchool)} eventHandlers={{
                            click: () => {
                                setShowCard(true);
                                setCurrentTypePoint(TypePoint.SCHOOL);
                                handleSchoolPointClick(point.schoolId) ;
                            },
                            }}></Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    )
}