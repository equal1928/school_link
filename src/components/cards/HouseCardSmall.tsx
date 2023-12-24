import { Card, Image } from 'react-bootstrap';
import { HouseModelCard } from '../../models/HouseModelCard'
import { FavouriteButton } from './FavouriteButton'

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
                <div className="titleHouseCardBlock">   
                    <div className="titleHouseCardText">          
                        {card.rooms}-ком. квартира, {card.totalSquare} кв.м.,  
                        {card.address}
                    </div>
                    <FavouriteButton houseId={card.id} />
                </div> 
                <div className="priceHouse">
                    {card.price} рублей     
                </div>
                <div className="linkToAd">
                    <p>Перейти к объявлению</p>
                </div>
            </Card.Body>
        </Card>
    )
}