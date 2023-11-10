import { Card, Image } from 'react-bootstrap';
import {OfferModel} from '../../models/OfferModel'

import './Cards.css'

interface HouseCardProps {
    card: OfferModel;
}

export function HouseCard(props: HouseCardProps) {
    return (
        <Card className="HouseCard" style={{ width: '18rem', backgroundColor: "#E3E5E5" }}>
            <Card.Img variant="top" src={`${props.card.photo}`} />
            <Card.Body>
                <div>
                    {props.card.price} рублей<br/>                
                    {props.card.rooms}-ком. квартира, {props.card.square} кв.м., 
                    {props.card.currentFloor}/{props.card.totalFloors} этаж
                </div>
                <div>Школы рядом:</div>
                <div>
                    {props.card.schools.map(school => <li>Школа №{school.number} <a href={school.link}>Узнать о школе</a></li>)}   
                </div>
                <div>{props.card.address}</div>
            </Card.Body>
        </Card>
    )
}