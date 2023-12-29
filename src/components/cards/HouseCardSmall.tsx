import { Card, Image } from 'react-bootstrap';
import { HouseModelCard } from '../../models/HouseModelCard'
import { FavouriteButton } from './FavouriteButton'

import './HouseCardSmall.css'


export function HouseCardSmall({ card }: { card: HouseModelCard }) {
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
    const handleFavsClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
    };

    return (
        <Card className="houseCardSmall" onClick={handleHomeCardClick(card.id)}>
            <div className="fixblock">
                <Card.Img variant="top" className="imageHouseCard" src={""} />
            </div>
            <Card.Body className="cardBody">
                <div className="titleHouseCardBlock">
                    <div className="titleHouseCardText">
                        {/* {card.rooms}-ком. квартира, {card.totalSquare} кв.м. */}
                        Продажа квартиры на {card.floor} этаже
                    </div>
                    <div className="priceHouse">
                        {formattedNumber(card.price)}
                    </div>
                    <div className="linkToFavsSmall">
                        <FavouriteButton houseId={card.id}/>
                    </div>
                </div>
                <div className="adressHouseCard">
                    г. Екатеринбург, ул. {card.street}, {card.house_number}
                </div>
                <div className="priceHouseSmall">
                    {formattedNumber(card.price)};
                </div>
                <div className="buttonWrapper">
                    <div className="linkToAd" onClick={handleLinkClick}>
                        <p>Посмотреть на ЦИАН</p>
                    </div>
                    <div className="linkToFavs">
                        <FavouriteButton houseId={card.id}/>
                        <a className="textFavs" onClick={handleFavsClick}>В избранное</a>
                    </div>
                </div>

            </Card.Body>
        </Card>
    )
}