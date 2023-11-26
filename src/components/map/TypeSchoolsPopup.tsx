import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import "./TypeSchoolsPopup.css"

import baseSchoolMarker from "../images/baseSchoolMarker.png"
import inactiveMarker from "../images/inactiveMarker.png"
import gymnasiumMarker from "../images/gymnasiumMarker.png"
import topSchoolMarker from "../images/topSchoolMarker.png"
import lyceumMarker from "../images/lyceumMarker.png"


const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3" className="popoverHeader">Обозначение школы</Popover.Header>
    <Popover.Body className="popoverBody">
      <span><Image src={baseSchoolMarker} /><p>Общеобразовательная школа</p></span>
      <span><Image src={inactiveMarker} /><p>Школа не работает</p></span>
      <span><Image src={gymnasiumMarker} /><p>Гимназия</p></span>
      <span><Image src={topSchoolMarker} /><p>Школа топ 3 города</p></span>
      <span><Image src={lyceumMarker} /><p>Лицей</p></span>
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