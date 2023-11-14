import { Col, Container, Image, Row } from 'react-bootstrap'

import checkIcon from '../images/checkIcon.png'

export function DescriptionBlock() {
    return (
        <div className="descriptionBlock">
            <div className="descriptionTitle"><p>Почему нас выбирают?</p></div>
            <Container className="descriptionContainer">
                <Row>
                    <Col>
                        <div className="descriptionRow">
                            <Image className="checkIcon" src={checkIcon} />
                            <p>Актуальные предложения</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="descriptionRow">
                            <Image className="checkIcon" src={checkIcon} />
                            <p>Учитываем прописку и расстояние до школы</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="descriptionRow">
                            <Image className="checkIcon" src={checkIcon} />
                            <p>Помогаем найти квартиру рядом с той самой школой</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="descriptionRow">
                            <Image className="checkIcon" src={checkIcon} />
                            <p>Что-то еще</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}