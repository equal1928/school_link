import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from "react"
import { Col, Container, Image, Row, Spinner } from 'react-bootstrap'

import { Header } from '../components/header/Header'
import { Map } from '../components/map/Map'
import { Footer } from '../components/footer/Footer'
import { HouseModelCard } from "../models/HouseModelCard";
import { PointsHousesOnMap } from '../models/PointsHousesOnMap';
import { FavouriteButton } from '../components/cards/FavouriteButton';

import './HomePage.css'


export function HomePage() {
    const params = useParams();
    const homeId = params.id;
    const [loadingHomesCard, setLoadingHomesCard] = useState(false);
    const [homesCard, setHomesCard] = useState<HouseModelCard>();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const homesResponse = await axios.get<HouseModelCard>(`https://retoolapi.dev/bOu0Zi/houseinfo/${homeId}`);
            //const homesResponse = await axios.get<HouseModelCard>(`https://retoolapi.dev/cZVlG9/homeinfo/${homeId}`);
            setHomesCard(homesResponse.data);
            setLoadingHomesCard(true);
          } catch (error) {
            console.error(error);
            setLoadingHomesCard(true);
          }
        };
        fetchData();
    }, []);

    const [listPoints, setListPoints] = useState<PointsHousesOnMap[]>([]);
    const [mapIsLoading, setMapIsLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // const homesResponse = await axios.get<PointsHousesOnMap[]>(`/flat/coords`);
                // const respArray: PointsHousesOnMap[] = homesResponse.data;
                // const foundObject = respArray.find((item) => item.id === homeId);
                // if (foundObject)
                //     setListPoints([foundObject,]);

                const homesResponse = await axios.get<PointsHousesOnMap>(`https://retoolapi.dev/zNOy5M/houseinfocord/${homeId}`);
                setListPoints([homesResponse.data,]);
                setMapIsLoading(true);
            } catch (error) {
                console.error(error);
                setMapIsLoading(true);
            }
        };
      
        fetchData();
    }, []);

    const formattedNumber = (number: any) => {
        const roundedNumber = Math.round(parseFloat(number.replace(',', '.')));
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0,
        }).format(roundedNumber);
    };

    const formattedNumberYear = (number: any) => {
        const roundedNumber = Math.round(parseFloat(number.replace(',', '.')));
        return roundedNumber;
    };

    return (
        <div>
            <Header />
            {!loadingHomesCard ? (
                <Container className="spinnerContainer">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Container>
            ) : (
                <Container style={{marginTop: "20px"}}>
                    <Row>
                        <Col className="mainWrapper">
                            <div className="imgWrapper">
                                <Image className="cardImg" src={""}/>
                            </div>
                            {/*<div style={{position: "absolute", margin: "10px"}}>*/}
                            {/*    <FavouriteButton houseId={homesCard && homesCard.id} />*/}
                            {/*</div>*/}
                        </Col>
                        <Col className="headerInfoBlock">
                            {/* <div className="titleSell">Продажа {homesCard && homesCard.rooms}-комнатной квартиры, {homesCard && homesCard.totalSquare} кв.м., {homesCard && homesCard.address}</div> */}
                            <div className="titleSell">Продажа квартиры на {homesCard && homesCard.floor} этаже, г. Екатеринбург, ул. {homesCard && homesCard.street}, {homesCard && homesCard.house_number}</div>
                            <div className="price">{homesCard && formattedNumber(homesCard.price)}</div>
                            {/*Школы рядом:*/}
                            {/*<div className="nearbySchools">*/}
                            {/*    <li>Школа №203,</li>*/}
                            {/*    <li>Лицей №110,</li>*/}
                            {/*    <li>Школа №10</li>*/}
                            {/*</div>*/}
                            <div className="cardLinkHome"><a href={homesCard && homesCard.link}>Перейти к объявлению</a>
                            </div>
                            <div className="linkToFavs">
                                <FavouriteButton houseId={homesCard && homesCard.id}/> <a className="textFavs"> В избранное </a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="generalDescription">
                            <p className="description">Общая информация</p>
                            <p>КВАРТИРА</p>
                            <div className="apartmentDescription">
                                <span>
                                    <p>Тип жилья</p>
                                    <p>{/*{homesCard && homesCard.housType}*/}Новостройка</p>
                                </span>
                                {/* <span>
                                    <p>Общая площадь</p>
                                    <p>{homesCard && homesCard.totalSquare} кв.м</p>
                                    <p>{homesCard && homesCard.square} кв.м</p>
                                </span> */}
                                {/* <span>
                                    <p>Этаж/этажность</p>
                                    <p>{homesCard && homesCard.currentFloor}/{homesCard && homesCard.totalFloors}</p>
                                </span> */}
                                <span>
                                    <p>Этаж</p>
                                    <p>{homesCard && homesCard.floor}</p>
                                </span>
                                {/* <span>
                                    <p>Количество комнат</p>
                                    <p>{homesCard && homesCard.rooms}</p>
                                </span> */}
                                {/* <span>
                                    <p>Жилая площадь</p>
                                    <p>{homesCard && homesCard.livingSquare} 100 кв.м.</p>
                                </span> */}
                            </div>
                            <p>ДОМ</p>
                            <div className="houseDescription">
                                <span>
                                    <p>Жилой комплекс</p>
                                    <p>{homesCard && homesCard.Property_Type}</p>
                                </span>
                                <span>
                                    <p>Материал стен</p>
                                    <p>{homesCard && homesCard.House_Type}</p>
                                </span>
                                <span>
                                    <p>Год постройки</p>
                                    <p>{homesCard && formattedNumberYear(homesCard.Year_of_Construction)}</p>
                                </span>
                            </div>
                        </Col>
                        <Col className="descriptionObject">
                            <p className="description">Описание объекта</p>
                            <p className="descriptionObjectText">
                                Описание отсутствует.
                                {/*{homesCard && homesCard.description}*/}
                            </p>
                        </Col>
                    </Row>
                </Container>
            )}
            <Container><p className="descriptionMap">Расположение объекта</p></Container> 
            <div className="mapBlock">
                {!mapIsLoading ? (
                    <Container className="spinnerContainer">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Container>
                ) : (
                    <Map isMapPage={false} points={{ homes: listPoints, schools: [] }} />
                )}
            </div>
            <Footer />
        </div>
    );
}