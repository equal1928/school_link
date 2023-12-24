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
      <span><Image className="homeMarker" src={homeMarker} /><p>Объект недвижимости</p></span>
      <span><Image className="schoolMarker" src={top5SchoolMarker} /><p>Школа топ 5</p></span>
      <span><Image className="schoolMarker" src={top20SchoolMarker} /><p>Школа топ 20</p></span>
      <span><Image className="schoolMarker" src={top56SchoolMarker} /><p>Школа топ 56</p></span>
      <span><Image className="schoolMarker" src={baseSchoolMarker} /><p>Просто школа</p></span>
    </Popover.Body>
  </Popover>
);

export function TypeSchoolsPopup() {
    return (
        <OverlayTrigger trigger="click" placement="left" overlay={popover}>
            <Button className="popoverButton">?</Button>
        </OverlayTrigger>
    )
};