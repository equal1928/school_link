import { Card, Image } from 'react-bootstrap';
import { HouseModelCard } from '../../models/HouseModelCard'

import './HouseCardLarge.css'


export function HouseCardLarge({ card }: { card: HouseModelCard }) {
    const handleHomeCardClick = (homeId: number) => (event: React.MouseEvent<HTMLElement>) => {
        window.open(`/homes/${homeId}`, '_blank');
    };
    const handleLinkClick = (event: React.MouseEvent<HTMLElement>) => {
        window.open(`${card.link}`, '_blank');
        event.stopPropagation();
    };
    const formattedNumber = (number: any) => {
        const roundedNumber = Math.round(parseFloat(number.replace(',', '.')));
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0,
        }).format(roundedNumber);
    };

    return (
        <Card className="HouseCardLarge" onClick={handleHomeCardClick(card.id)}>
            <div className="cardImgWrapper">
                <Card.Img variant="top" className="cardImg" src={""} />
            </div>
            <Card.Body>
                <div className="cardPrice">{formattedNumber(card.price)}</div>
                <div>            
                    {/* {card.rooms}-ком. квартира, {card.totalSquare} кв.м.<br/>  */}
                    {/* {card.rooms}-ком. квартира, {card.square} кв.м.<br/> 
                    {card.currentFloor}/{card.totalFloors} этаж */}
                    Продажа квартиры на {card.floor} этаже
                </div>
                {/* Школы рядом:
                <div className="nearbySchools">
                    <li>Школа №203,</li>
                    <li>Лицей №110,</li>
                    <li>Школа №10</li>
                </div> */}
                {/* <div>
                    {card.schools && card.schools.map(school => <li>Школа №{school.number} <a href={school.link}>Узнать о школе</a></li>)}   
                </div> */}
                <div className="cardAddress">
                    г. Екатеринбург, ул. {card.street}, {card.house_number}
                </div>
                <div className="cardLink" onClick={handleLinkClick}>
                    <p>Посмотреть на ЦИАН</p>
                </div>
            </Card.Body>
        </Card>
    )
}