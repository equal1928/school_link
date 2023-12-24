import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';

import './Disclaimer.css'

import homeMarker from "../images/redMarker.png"
import baseSchoolMarker from "../images/blueMarker.png"
// import inactiveMarker from "../images/redMarker.png"
import goodSchoolMarker from "../images/orangeMarker.png"
import topSchoolMarker from "../images/greenMarker.png"
// import lyceumMarker from "../images/lyceumMarker.png"

export function Disclaimer() {

    return (
        <Container>
            <div className="disclaimer">
                <div className="rateBlock">
                    <p> Для удобства школы на карте разделены на группы по рейтингу.
                        За основу мы взяли рейтинг агенства недвижимости "Драже". Его идея в том, чтобы найти в каждом микрорайоне города
                        лучшие школы. Поэтому рейтинг могли попасть и не самые сильные школы, но при этом лучшие в
                        районе. </p>
                </div>
                <div className="schoolBlock">
                    <div className="disclaimerWrapper"><Image className="homeMarker" src={homeMarker}/><p>Объект
                        недвижимости</p></div>
                    <div className="disclaimerWrapper"><Image className="schoolMarker" src={baseSchoolMarker}/><p>Просто
                        школа</p></div>
                    <div className="disclaimerWrapper"><Image className="schoolMarker" src={goodSchoolMarker}/>
                        <p>Школа топ 20</p></div>
                    <div className="disclaimerWrapper"><Image className="schoolMarker" src={topSchoolMarker}/><p>Школа
                        топ 5 района</p></div>
                </div>
            </div>
        </Container>
    )
}