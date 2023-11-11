import { HouseCardSmall } from './HouseCardSmall'
import img1 from '../images/House1.png'
import img2 from '../images/House2.png'
import img3 from '../images/House3.png'


import './Cards.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { HouseModel } from '../../models/HouseModel'
import { Container, Pagination, Spinner } from 'react-bootstrap'


const card = [
    {
        id: 1,
        photo: `${img1}`,
        price: 8000000,
        rooms: 3,
        square: 110,
        currentFloor: 8,
        totalFloors: 10,
        schools: [
            {
                number: 9,
                address: "Плотинка",
                link: "https"
            },
            {
                number: 10,
                address: "Плотинка",
                link: "https"
            },
            {
                number: 11,
                address: "Плотинка",
                link: "https"
            }
        ],
        address: "Свердловская обл., г. Екатеринбург, ул. Красноуральская, 22",
        link: "https",
    },
    {
        id: 2,
        photo: `${img2}`,
        price: 4000000,
        rooms: 1,
        square: 40,
        currentFloor: 2,
        totalFloors: 30,
        schools: [
            {
                number: 9,
                address: "Плотинка",
                link: "https"
            },
            {
                number: 10,
                address: "Плотинка",
                link: "https"
            },
            {
                number: 11,
                address: "Плотинка",
                link: "https"
            }
        ],
        address: "Свердловская обл., г. Екатеринбург, ул. Красноуральская, 24",
        link: "https",
    },
    {
        id: 3,
        photo: `${img3}`,
        price: 5600000,
        rooms: 2,
        square: 70,
        currentFloor: 4,
        totalFloors: 15,
        schools: [
            {
                number: 9,
                address: "Плотинка",
                link: "https"
            },
            {
                number: 10,
                address: "Плотинка",
                link: "https"
            },
            {
                number: 11,
                address: "Плотинка",
                link: "https"
            }
        ],
        address: "Свердловская обл., г. Екатеринбург, ул. Красноуральская, 20",
        link: "https",
    },
]

export function ListHouse() {
    const [Cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("https://retoolapi.dev/cpL8ts/data").then(response => {
            setCards(response.data);
            setIsLoading(false)
        }).catch(error => {
            console.error(error);
            setIsLoading(false)
        });
    }, []);

    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
            {number}
            </Pagination.Item>,
        );
    }

    return (
        <div className="ListHouse">
            {/* {isLoading ? (
                <Container className="SpinnerListHouse">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Container>
            ) : (
                Cards.map((card: HouseModel) => (
                    <HouseCardSmall card={card}/>
                ))
            )} */}
            <HouseCardSmall card={card[0]}/>
            <HouseCardSmall card={card[1]}/>
            <HouseCardSmall card={card[2]}/>
            <Pagination>{items}</Pagination>
        </div>
    )
}