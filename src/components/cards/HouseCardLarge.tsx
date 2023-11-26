import { Card, Image } from 'react-bootstrap';
import { HouseModelCard } from '../../models/HouseModelCard'

import './HouseCardLarge.css'

export function HouseCardLarge({ card }: { card: HouseModelCard }) {
    return (
        <Card className="HouseCardLarge" style={{ width: '18rem', backgroundColor: "#E3E5E5" }}>
            <Card.Img variant="top" src={card.photo} />
            <Card.Body>
                <div>{card.price} рублей</div>
                <div>            
                    {card.rooms}-ком. квартира, {card.square} кв.м.<br/> 
                    {card.currentFloor}/{card.totalFloors} этаж
                </div>
                Школы рядом:
                <div className="nearbySchools">
                    <li>Школа №203,</li>
                    <li>Лицей №110,</li>
                    <li>Школа №10</li>
                </div>
                <div>
                    {card.schools && card.schools.map(school => <li>Школа №{school.number} <a href={school.link}>Узнать о школе</a></li>)}   
                </div>
                <div className="cardAddress">{card.address}</div>
                <div className="cardLink"><a href={card.link}>Перейти к объявлению</a></div>
            </Card.Body>
        </Card>
    )
}