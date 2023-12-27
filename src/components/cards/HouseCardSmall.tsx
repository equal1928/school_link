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
                        {card.rooms}-ком. квартира, {card.totalSquare} кв.м.
                    </div>
                    <div className="priceHouse">
                        1 245 000 &#8381;
                    </div>
                    <div className="linkToFavsSmall">
                        <FavouriteButton houseId={card.id}/>
                    </div>
                </div>
                <div className="adressHouseCard">
                    {card.address}
                </div>
                <div className="priceHouseSmall">
                    {card.price} &#8381;
                </div>
                <div className="buttonWrapper">
                    <div className="linkToAd">
                        <p>Посмотреть на ЦИАН</p>
                    </div>
                    <div className="linkToFavs">
                        <FavouriteButton houseId={card.id}/>  <a className="textFavs"> В избранное </a>
                    </div>
                </div>

            </Card.Body>
        </Card>
    )
}