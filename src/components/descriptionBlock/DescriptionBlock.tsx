import { Container, Image } from 'react-bootstrap'

import checkIcon from '../images/checkIcon.png'

export function DescriptionBlock() {
    return (
        <Container className="descriptionBlock">
            <div className="descriptionTitle"><p>Почему нас выбирают?</p></div>
            <Container className="descriptionContainer col-12 col-sm-12 col-md-12 col-lg-8">
                <div className="descriptionRow"><Image className="checkIcon" src={checkIcon} /><p>Нацеленность на результат</p></div>
                <div className="descriptionRow"><Image className="checkIcon" src={checkIcon} /><p>Сотни довольных клиентов</p></div>
                <div className="descriptionRow"><Image className="checkIcon" src={checkIcon} /><p>Единая база недвижимости</p></div>
                <div className="descriptionRow"><Image className="checkIcon" src={checkIcon} /><p>Аттестованные риэлторы</p></div>
            </Container>
        </Container>
    )
}