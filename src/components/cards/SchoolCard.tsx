import { Image } from 'react-bootstrap';
import { SchoolModel } from '../../models/SchoolModel'

import './Cards.css'

interface SchoolCardProps {
    card: SchoolModel;
}

export function SchoolCard(props: SchoolCardProps) {
    return (
        <div className="SchoolCard">
            <Image src={`${props.card.photo}`} alt="" />
            <div>
                {props.card.title}<br/>                
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