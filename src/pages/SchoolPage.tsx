import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from "react"
import { Col, Container, Image, Row, Spinner } from 'react-bootstrap'

import { Header } from '../components/header/Header'
import { Map } from '../components/map/Map'
import { Footer } from '../components/footer/Footer'
import { PointsSchoolsOnMap } from '../models/PointsSchoolsOnMap';
import {SchoolModelCard} from "../models/SchoolModelCard";

import './SchoolPage.css'


export function SchoolPage() {
    const params = useParams();
    const schoolId: number = params.id ? parseInt(params.id, 10) : 0;
    //const schoolId = params.id;
    const [loadingSchoolCard, setLoadingSchoolCard] = useState(false);
    const [schoolCard, setSchoolCard] = useState<SchoolModelCard>();

    useEffect(() => {
        const fetchData = async () => {
          try {
            //const schoolResponse = await axios.get<SchoolModelCard>(`/schools/${schoolId}`);
            //const schoolResponse = await axios.get<SchoolModelCard>(`https://retoolapi.dev/PlFJLm/scholinfo/${schoolId}`);
            const schoolResponse = await axios.get<SchoolModelCard>(`https://retoolapi.dev/oDaq8M/schoolinfo/${schoolId}`);
            
            setSchoolCard(schoolResponse.data);
            setLoadingSchoolCard(true);
          } catch (error) {
            console.error(error);
            setLoadingSchoolCard(true);
          }
        };
        fetchData();
    }, []);

    const [listPoints, setListPoints] = useState<PointsSchoolsOnMap[]>([]);
    const [mapIsLoading, setMapIsLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // const schoolResponse = await axios.get<PointsSchoolsOnMap[]>(`/school/coords`);
                // const respArray: PointsSchoolsOnMap[] = schoolResponse.data;
                // const foundObject = respArray.find((item) => item.id === schoolId);
                // if (foundObject)
                //     setListPoints([foundObject,]);

                const schoolResponse = await axios.get<PointsSchoolsOnMap>(`https://retoolapi.dev/Wpxa0f/schoolcoords/${schoolId}`);
                setListPoints([schoolResponse.data,]);
                setMapIsLoading(true);
            } catch (error) {
                console.error(error);
                setMapIsLoading(true);
            }
        };
    
        fetchData();
    }, []);

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
                            <div>
                                <p className="titleSell">{schoolCard && schoolCard.name}</p>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-md-12">
                            <div className="mainWrapper">
                                <div className="imgWrapper">
                                    {/* <Image className="cardImg" src={schoolCard && schoolCard.photo}/> */}
                                    <Image className="cardImg" src={""}/>
                                </div>

                                <div className="generalDescription">
                                    <div className="schoolDescription">
                                        <span>
                                            <div className="field"> Адрес: </div>
                                            <div>{schoolCard && schoolCard.address}</div>
                                        </span>
                                        <span>
                                            <div className="field">Телефоны:</div>
                                            <div>{schoolCard && schoolCard.phone}</div>
                                        </span>
                                        <span>
                                            <div className="field">Адрес электронной почты:</div>
                                            <div>{schoolCard && schoolCard.email}</div>
                                        </span>
                                        <span>
                                            <div className="field">Сайт:</div>
                                            <div className="cardLinkSchool"><a href={schoolCard && schoolCard.link}>{schoolCard && schoolCard.link}</a></div>
                                        </span>
                                        <span>
                                            <div className="field">Дата основания:</div>
                                            <div>{schoolCard && schoolCard.foundingDate}</div>
                                        </span>
                                        <span>
                                            <div className="field">Классы:</div>
                                            <div>{schoolCard && schoolCard.classes}</div>
                                        </span>
                                        <span>
                                            <div className="field">Численность обучающихся:</div>
                                            <div>{schoolCard && schoolCard.numberStudents}</div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="schoolDescriptionTwo">
                            <span>
                                <p className="field">Основное образование:</p>
                                <p>
                                    {schoolCard && schoolCard.basicEducation}
                                </p>
                            </span>
                            <span>
                                <p className="field">Профили:</p>
                                <p>
                                    {schoolCard && schoolCard.profiles}
                                </p>
                            </span>
                            <span>
                                <p className="field">Иностранный язык:</p>
                                <p>{schoolCard && schoolCard.languages}</p>
                            </span>
                            <span>
                                <p className="field">Дополнительное образование</p>
                                <p>
                                    {schoolCard && schoolCard.additionalEducation}
                                </p>
                            </span>
                        </div>
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
                    <Map isMapPage={false} points={{ homes: [], schools: listPoints }} />
                )}
            </div>
            <Footer/>
        </div>
    );
}