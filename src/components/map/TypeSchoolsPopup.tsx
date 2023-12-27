import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import "./TypeSchoolsPopup.css"

import homeMarker from "../images/greyMarker.png"
import top5SchoolMarker from "../images/greenMarker.png"
import top20SchoolMarker from "../images/blueMarker.png"
import top56SchoolMarker from "../images/orangeMarker.png"
import baseSchoolMarker from "../images/redMarker.png"


const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3" className="popoverHeader">Обозначения на карте</Popover.Header>
      <Popover.Body className="popoverBody">
          <div className="rateBlock">
              <p> Для удобства школы на карте разделены на группы по рейтингу.
                  За основу мы взяли рейтинг агенства недвижимости "Драже". Его идея в том, чтобы найти в каждом
                  микрорайоне города
                  лучшие школы. Всего достойных внимания оказалось 56. На карте они отмечены маркерами. <a
                      style={{color: "mediumseagreen"}}>Топ-5 школ города,</a>
                  <a style={{color: "royalblue"}}> топ-20 школ,</a> <a style={{color: "darkorange"}}> топ-56 </a> и <a
                      style={{color: "red"}}>школы, которые не вошли в рейтинг.</a></p>
          </div>
          <span><Image className="homeMarker" src={homeMarker}/><p>Объект недвижимости</p></span>
          <span><Image className="schoolMarker" src={top5SchoolMarker}/><p>Школа топ 5</p></span>
          <span><Image className="schoolMarker" src={top20SchoolMarker}/><p>Школа топ 20</p></span>
          <span><Image className="schoolMarker" src={top56SchoolMarker}/><p>Школа топ 56</p></span>
          <span><Image className="schoolMarker" src={baseSchoolMarker}/><p>Просто школа</p></span>
      </Popover.Body>
  </Popover>
);

export function TypeSchoolsPopup() {
    return (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <Button className="popoverButton">Рейтинг школ</Button>
        </OverlayTrigger>
    )
};