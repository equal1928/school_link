import { Card, Image } from 'react-bootstrap';
import { HouseModelCard } from '../../models/HouseModelCard'

import './HouseCardLarge.css'


export function HouseCardLarge({ card }: { card: HouseModelCard }) {
    const handleHomeCardClick = (homeId: number) => (event: React.MouseEvent<HTMLElement>) => {
        window.open(`/homes/${homeId}`, '_blank');
    }
    return (
        <Card className="HouseCardLarge" onClick={handleHomeCardClick(card.id)}>
            <div className="cardImgWrapper">
                <Card.Img variant="top" className="cardImg" src={card.photo} />
            </div>
            <Card.Body>
                <div className="cardPrice">{card.price} рублей</div>
                <div>            
                    {card.rooms}-ком. квартира, {card.totalSquare} кв.м.<br/> 
                    {card.currentFloor}/{card.totalFloors} этаж
                </div>
                {/* Школы рядом:
                <div className="nearbySchools">
                    <li>Школа №203,</li>
                    <li>Лицей №110,</li>
                    <li>Школа №10</li>
                </div> */}
                <div>
                    {card.schools && card.schools.map(school => <li>Школа №{school.number} <a href={school.link}>Узнать о школе</a></li>)}   
                </div>
                <div className="cardAddress">
                    {card.address}
                </div>
                <div className="cardLink">
                    <p>Перейти к объявлению</p>
                </div>
            </Card.Body>
        </Card>
    )
}