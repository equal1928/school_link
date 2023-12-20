import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import "./TypeSchoolsPopup.css"

import homeMarker from "../images/redMarker.png"
import baseSchoolMarker from "../images/blueMarker.png"
// import inactiveMarker from "../images/redMarker.png"
import goodSchoolMarker from "../images/orangeMarker.png"
import topSchoolMarker from "../images/greenMarker.png"
// import lyceumMarker from "../images/lyceumMarker.png"


const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3" className="popoverHeader">Обозначения на карте</Popover.Header>
    <Popover.Body className="popoverBody">
      <span><Image className="homeMarker" src={homeMarker} /><p>Объект недвижимости</p></span>
      <span><Image className="schoolMarker" src={baseSchoolMarker} /><p>Просто школа</p></span>
      {/*<span><Image className="schoolMarker" src={inactiveMarker} /><p></p></span>*/}
      <span><Image className="schoolMarker" src={goodSchoolMarker} /><p>Хорошая школа</p></span>
      <span><Image className="schoolMarker" src={topSchoolMarker} /><p>Школа топ 5 района</p></span>
      {/*<span><Image className="schoolMarker" src={lyceumMarker} /><p>Лицей</p></span>*/}
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