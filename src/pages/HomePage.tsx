import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from "react"
import { Col, Container, Image, Row, Spinner } from 'react-bootstrap'

import { Header } from '../components/header/Header'
import { Map } from '../components/map/Map'
import { Footer } from '../components/footer/Footer'
import { HouseModelCard } from "../models/HouseModelCard";
import { PointsHousesOnMap } from '../models/PointsHousesOnMap';
import { PointsSchoolsOnMap } from '../models/PointsSchoolsOnMap';

import './HomePage.css'


export function HomePage() {
    const params = useParams();
    const homeId = params.id;
    const [loadingHomesCard, setLoadingHomesCard] = useState(false);
    const [homesCard, setHomesCard] = useState<HouseModelCard>();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const homesResponse = await axios.get<HouseModelCard>(`https://retoolapi.dev/cZVlG9/homeinfo/${homeId}`);
            setHomesCard(homesResponse.data);
            setLoadingHomesCard(true);
          } catch (error) {
            console.error(error);
            setLoadingHomesCard(true);
          }
        };
        fetchData();
      }, []);

    // const [PointsHomes, setPointsHomes] = useState<PointsHousesOnMap[]>([]);
    // const [mapIsLoading, setMapIsLoading] = useState(false);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const homesResponse = await axios.get<PointsHousesOnMap[]>(`https://retoolapi.dev/minnlU/homepoints/${homeId}`);
    //         setPointsHomes(homesResponse.data);
    //         setMapIsLoading(true);
    //       } catch (error) {
    //         console.error(error);
    //         setMapIsLoading(true);
    //       }
    //     };
      
    //     fetchData();
    //   }, []);

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
                <Container>
                    <Row>
                        <Col>
                            <Image className="cardImg" src={homesCard && homesCard.photo} />
                        </Col>
                        <Col className="headerInfoBlock">
                            <p className="titleSell">Продажа {homesCard && homesCard.rooms}-комнатной квартиры,
                                {homesCard && homesCard.square} кв.м., {homesCard && homesCard.address}
                            </p>
                            <div className="price">{homesCard && homesCard.price} рублей</div>
                            Школы рядом:
                            <div className="nearbySchools">
                                <li>Школа №203,</li>
                                <li>Лицей №110,</li>
                                <li>Школа №10</li>
                            </div>
                            <div className="cardLink"><a href={homesCard && homesCard.link}>Перейти к объявлению</a></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="generalDescription">
                            <p className="description">Общая информация</p>
                            <p>КВАРТИРА</p>
                            <div className="apartmentDescription">
                                <span>
                                    <p>Тип жилья</p>
                                    <p>Новостройка</p>
                                </span>
                                <span>
                                    <p>Общая площадь</p>
                                    <p>{homesCard && homesCard.square} кв.м</p>
                                </span>
                                <span>
                                    <p>Этаж/этажность</p>
                                    <p>{homesCard && homesCard.currentFloor}/{homesCard && homesCard.totalFloors}</p>
                                </span>
                                <span>
                                    <p>Количество комнат</p>
                                    <p>{homesCard && homesCard.rooms}</p>
                                </span>
                                <span>
                                    <p>Жилая площадь</p>
                                    <p>100 кв.м.</p>
                                </span>
                            </div>
                            <p>ДОМ</p>
                            <div className="houseDescription">
                                <span>
                                    <p>Жилой комплекс</p>
                                    <p>Новостройка</p>
                                </span>
                                <span>
                                    <p>Материал стен</p>
                                    <p>Кирпич</p>
                                </span>
                                <span>
                                    <p>Год постройки</p>
                                    <p>2008</p>
                                </span>
                            </div>
                        </Col>
                        <Col className="descriptionObject">
                            <p className="description">Описание объекта</p>
                            <p>цйуцйуйцуцйуывфвфыыфвфыымысммсысмывмвымывамывамывамвымывавымаыамавыа</p>
                        </Col>
                    </Row>
                </Container>
            )}
            <p className="description">Расположение объекта</p>
            {/* <Map points={{ homes: PointsHomes, schools: [] }} /> */}
            <Footer />
        </div>
    );
}