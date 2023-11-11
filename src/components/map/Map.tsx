import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, LatLngExpression, divIcon, point } from "leaflet";
import { PointsOnMapModel } from '../../models/PointOnMapModel'
import { useState } from "react";
import { CloseButton, Offcanvas, Spinner } from "react-bootstrap";

import { HouseCardLarge } from "../cards/HouseCardLarge";
import "./SearchMap.css"

import img1 from '../images/House1.png'
import img2 from '../images/House2.png'
import img3 from '../images/House3.png'


const card = [
    {
        id: 1,
        photo: `${img1}`,
        price: 8000000,
        rooms: 3,
        square: 110,
        currentFloor: 8,
        totalFloors: 10,
        schools: [
            {
                number: 9,
                address: "Плотинка",
                link: "https"
            },
            {
                number: 10,
                address: "Плотинка",
                link: "https"
            },
            {
                number: 11,
                address: "Плотинка",
                link: "https"
            }
        ],
        address: "Свердловская обл., г. Екатеринбург, ул. Красноуральская, 22",
        link: "https",
    },
    {
        id: 2,
        photo: `${img2}`,
        price: 4000000,
        rooms: 1,
        square: 40,
        currentFloor: 2,
        totalFloors: 30,
        schools: [
            {
                number: 9,
                address: "Плотинка",
                link: "https"
            },
            {
                number: 10,
                address: "Плотинка",
                link: "https"
            },
            {
                number: 11,
                address: "Плотинка",
                link: "https"
            }
        ],
        address: "Свердловская обл., г. Екатеринбург, ул. Красноуральская, 24",
        link: "https",
    },
    {
        id: 3,
        photo: `${img3}`,
        price: 5600000,
        rooms: 2,
        square: 70,
        currentFloor: 4,
        totalFloors: 15,
        schools: [
            {
                number: 9,
                address: "Плотинка",
                link: "https"
            },
            {
                number: 10,
                address: "Плотинка",
                link: "https"
            },
            {
                number: 11,
                address: "Плотинка",
                link: "https"
            }
        ],
        address: "Свердловская обл., г. Екатеринбург, ул. Красноуральская, 20",
        link: "https",
    },
]


const customIcon = new Icon({
    iconUrl: require("../images/marker.png"),
    iconSize: [38, 38] // size of the icon
  });

// const createClusterCustomIcon = function (cluster) {
//     return new divIcon({
//         html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
//         className: "custom-marker-cluster",
//         iconSize: point(33, 33, true)
//     });
// };

// interface PointsOnMapModelProps {
//     points: PointsOnMapModel;
// }

export function Map(props: PointsOnMapModel) {
    const MAP_CENTER: LatLngExpression = props.points.length ? [props.points[0].latitude, props.points[0].longitude] : [56.838270, 60.603475];

    // const handleMarkerClick = (pointId) => {
    //     // Отправить GET-запрос с идентификатором точки
    //     axios.get(`https://example.com/api/points/${pointId}`)
    //         .then(response => {
    //             // Обработать ответ здесь
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    return (
        <div className="SearchMapContainer">
            <div className="ListHouseMap" style={{ display: show ? 'block' : 'none' }}>
                {/* { {cardsIsLoading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    <HouseCardLarge card={card[0]}/>
                    <HouseCardLarge card={card[1]}/>
                    <HouseCardLarge card={card[2]}/>
                )} } */}
                <div className="titleList">
                    <p style={{ margin: 0}}>Объявления</p>
                    <CloseButton className="closeButton" onClick={handleClose}/>
                </div>
                <HouseCardLarge card={card[0]}/>
                <HouseCardLarge card={card[1]}/>
                <HouseCardLarge card={card[2]}/>
            </div>
            <div>
                <MapContainer className="MapContainer" center={MAP_CENTER} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MarkerClusterGroup chunkedLoading /*iconCreateFunction={createClusterCustomIcon}*/ >
                        {props.points.map(point => (
                            <Marker key={point.id} position={[point.latitude, point.longitude]} icon={customIcon} eventHandlers={{
                                click: () => {
                                    setShow(true)
                                    //TODO: Сделать запрос объектов, выбраного дома 
                                },
                              }}></Marker>
                        ))}
                    </MarkerClusterGroup>
                </MapContainer>
            </div>
        </div>
    )
}