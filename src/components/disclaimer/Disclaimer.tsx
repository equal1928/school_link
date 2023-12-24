import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import './Disclaimer.css'

import homeMarker from "../images/greyMarker.png"
import top5SchoolMarker from "../images/greenMarker.png"
import top20SchoolMarker from "../images/blueMarker.png"
import top56SchoolMarker from "../images/orangeMarker.png"
import baseSchoolMarker from "../images/redMarker.png"

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
                    <div className="disclaimerWrapper"><Image className="schoolMarker" src={top5SchoolMarker}/>
                        <p>Школа топ 5</p>
                    </div>
                    <div className="disclaimerWrapper"><Image className="schoolMarker" src={top20SchoolMarker}/>
                        <p>Школа топ 20</p>
                    </div>
                    <div className="disclaimerWrapper"><Image className="schoolMarker" src={top56SchoolMarker}/>
                        <p>Школа топ 56</p>
                    </div>
                    <div className="disclaimerWrapper"><Image className="schoolMarker" src={baseSchoolMarker}/>
                        <p>Просто школа</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}