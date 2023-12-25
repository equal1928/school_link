import { Card, Image } from 'react-bootstrap';
import { SchoolModelCard } from '../../models/SchoolModelCard'

import './SchoolCard.css'


export function SchoolCard({ card }: { card: SchoolModelCard }) {
    const handleSchoolCardClick = (schoolId: number) => (event: React.MouseEvent<HTMLElement>) => {
        window.open(`/schools/${schoolId}`, '_blank');
    }
    return (
        <Card className="SchoolCard" style={{width: '18rem', backgroundColor: "#E3E5E5"}}
              onClick={handleSchoolCardClick(card.id)}>
            <div className="cardImgWrapperSchool">
                <Card.Img variant="top" className="cardImg" src={card.photo}/>
            </div>
                <Card.Body>
                    <div className="schoolName">
                        {card.name}<br/>
                    </div>
                    {/* <div>
                    {card.features && card.features.map(feature => <li>{feature}</li>)}               
                </div> */}
                    {/*<div>*/}
                    {/*    <li>Профильные классы,</li>*/}
                    {/*    <li>Подготовка к олимпиадам,</li>*/}
                    {/*    <li>Высокий средний бал ЕГЭ</li>*/}
                    {/*</div>*/}
                    <div className="cardAddress">
                        {card.address}<br/>
                    </div>
                    <div className="cardLink">
                        <p>Перейти к школе</p>
                    </div>
                </Card.Body>
        </Card>
)
}