import { Card, Image } from 'react-bootstrap';
import { SchoolModelCard } from '../../models/SchoolModelCard'

import './SchoolCard.css'


export function SchoolCard({ card }: { card: SchoolModelCard }) {
    const handleSchoolCardClick = (schoolId: number) => (event: React.MouseEvent<HTMLElement>) => {
        window.open(`/schools/${schoolId}`, '_blank');
    }
    return (
        <Card className="SchoolCard" style={{ width: '18rem', backgroundColor: "#E3E5E5" }} onClick={handleSchoolCardClick(card.id)}>
            <Card.Img variant="top" src={card.photo} />
            <Card.Body>
                <div className="schoolName">
                    {card.name}<br/>
                </div>
                {/* <div>
                    {card.features && card.features.map(feature => <li>{feature}</li>)}               
                </div> */}
                <div>
                    <li>Профильные классы,</li>
                    <li>Подготовка к олимпиадам,</li>
                    <li>Высокий средний бал ЕГЭ</li>
                </div>
                <div className="cardAddress">{card.address}<br/></div>
                <div className="cardLink"><a href={card.link}>Перейти на сайт школы</a></div>
            </Card.Body>
        </Card>
    )
}