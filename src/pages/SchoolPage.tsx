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

import './SchoolPage.css'
import {SchoolModelCard} from "../models/SchoolModelCard";
import TestSchool from "../images/homeMarker.png";

export function SchoolPage() {
    const params = useParams();
    const schoolId = params.id;
    const [loadingSchoolCard, setLoadingSchoolCard] = useState(false);
    const [schoolCard, setSchoolCard] = useState<SchoolModelCard>();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const schoolResponse = await axios.get<SchoolModelCard>(`https://retoolapi.dev/cZVlG9/homeinfo/${schoolId}`);
            setSchoolCard(schoolResponse.data);
            setLoadingSchoolCard(true);
          } catch (error) {
            console.error(error);
            setLoadingSchoolCard(true);
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
            {!loadingSchoolCard ? (
                <Container className="spinnerContainer">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Container>
            ) : (
                <Container>
                    <Row>
                        <div className="col-md-12">
                            <div className="headerInfoBlock">
                                <p className="titleSell">Специализированный учебно-научный центр УрФУ</p>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-md-12">
                            <div className="mainWrapper">
                                <div className="imgWrapper">
                                    <Image className="cardImg" src={schoolCard && schoolCard.photo}/>
                                </div>

                                <div className="generalDescription">
                                    <div className="schoolDescription">
                                <span>
                                    <div className="field"> Адрес: </div>
                                    <div>г. Екатеринбург, ул. Щорса, 114</div>
                                </span>
                                        <span>
                                    <div className="field">Телефоны:</div>
                                    <div>9122334455</div>
                                </span>
                                        <span>
                                    <div className="field">Адрес электронной почты:</div>
                                    <div>licey3@eduekb.ru</div>
                                            {/*<p>{homesCard && homesCard.currentFloor}/{homesCard && homesCard.totalFloors}</p>*/}
                                </span>
                                        <span>
                                    <div className="field">Сайт:</div>
                                    <div>лицей3.екатеринбург.рф</div>
                                            {/*<p>{homesCard && homesCard.rooms}</p>*/}
                                </span>
                                        <span>
                                    <div className="field">Дата основания:</div>
                                    <div>101.09.1936</div>
                                </span>
                                        <span>
                                    <div className="field">Классы:</div>
                                    <div>с 1 по 11</div>
                                </span>
                                        <span>
                                    <div className="field">Численность обучающихся:</div>
                                    <div>849 чел</div>
                                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="schoolDescription">
                            <span>
                                    <p className="field">Основное образование:</p>
                                    <p>1. Образовательные программы начальной школы (I ступень обучения).
                                        2. Образовательные программы основной школы (II ступень обучения).
                                        3. Образовательные программы средней школы (III ступень обучения)</p>
                                </span>
                            <span>
                                    <p className="field">Профили:</p>
                                    <p>Естественнонаучный, технологический, социально-экономический.
                                        В основной школе лицеисты изучают предметы «Экология растений»,
                                        «Экология животных», «Экология человека», а также элективные курсы:
                                        «Флора в интерьере», «Культура здоровья», «Экология парков».
                                        В старшей школе изучаются «Общая экология», «Социальная экология»,
                                        «Экологический практикум». Таким образом, с 1 по 11 класс в лицее ярко
                                        прослеживается экологическая содержательная линия.</p>
                                </span>
                            <span>
                                    <p className="field">Иностранный язык:</p>
                                    <p>Английский</p>
                                </span>
                            <span>
                                    <p className="field">Дополнительное образование</p>
                                    <p>«Флористика», «Корнепластика», «Изобразительное искусство», «Театр моды»,
                                        помогающие развивать у обучающихся особую культуру общения человека с природой
                                        на языке искусства. «Баскетбол», «Футбол», «Хоровое пение», «Вокальная студия» способствуют гармоничному развитию личности, «Научно-практическое краеведение».</p>
                                </span>
                        </div>
                    </Row>
                </Container>
            )}
            <p className="description">Расположение объекта</p>
            {/* <Map points={{ homes: PointsHomes, schools: [] }} /> */}
            <Footer/>
        </div>
    );
}