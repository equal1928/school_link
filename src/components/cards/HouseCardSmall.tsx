import { Card, Image } from 'react-bootstrap';
import { HouseModelCard } from '../../models/HouseModelCard'

import './HouseCardSmall.css'


export function HouseCardSmall({ card }: { card: HouseModelCard }) {
    const handleHomeCardClick = (homeId: number) => (event: React.MouseEvent<HTMLElement>) => {
        window.open(`/homes/${homeId}`, '_blank');
    }
    return (
        <Card className="houseCardSmall" onClick={handleHomeCardClick(card.id)}>
            <div className="fixblock">
                <Card.Img variant="top" className="imageHouseCard" src={card.photo} />
            </div>
            <Card.Body className="cardBody">
                <div className="titleHouseCard">          
                    {card.rooms}-ком. квартира, {card.square} кв.м.,  
                    {card.address}
                </div>
                <div className="priceHouse">
                    {card.price} рублей     
                </div>
                <div className="linkToAd">
                    <a href={card.link}>Перейти к объявлению</a>
                </div>
            </Card.Body>
        </Card>
    )
}