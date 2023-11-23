import { Image } from 'react-bootstrap';
import { SchoolModelCard } from '../../models/SchoolModelCard'

import './Cards.css'

interface SchoolCardProps {
    card: SchoolModelCard;
}

export function SchoolCard(props: SchoolCardProps) {
    return (
        <div className="SchoolCard">
            <Image src={`${props.card.photo}`} alt="" />
            <div>
                {props.card.name}<br/>                
            </div>
            <div>
                {props.card.features.map(feature => <li>{feature}</li>)}               
            </div>
            <div>
                {props.card.address}<br/> 
                Школа №
            </div>
            <div><a href={props.card.link}>Перейти на сайт школы</a></div>
        </div>
    )
}