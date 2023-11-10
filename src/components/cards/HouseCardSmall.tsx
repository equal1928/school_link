import { Image } from 'react-bootstrap';
import { HouseModel } from '../../models/HouseModel'

import './Cards.css'

interface HouseCardProps {
    card: HouseModel;
}

export function HouseCardSmall(props: HouseCardProps) {
    return (
        <div className="HouseCardSmall">
            <Image className="imageHouseCard" src={props.card.photo} />
            <div className="cardBody">
                <div className="titleHouseCard">          
                    {props.card.rooms}-ком. квартира, {props.card.square} кв.м.,  
                    {props.card.address}
                </div>
                <div className="priceHouse">
                    {props.card.price} рублей     
                </div>
                <div className="linkToAd">
                    <a href={props.card.link}>Перейти к объявлению</a>
                </div>
            </div>
        </div>
    )
}