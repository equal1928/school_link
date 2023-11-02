import { HouseCard } from './HouseCard'
import img1 from '../images/House1.png'
import img2 from '../images/House2.png'
import img3 from '../images/House3.png'

import './Cards.css'

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

export function ListHouseCards() {
    return (
        <div className='ListHouseCards'>
            <HouseCard card={card[0]}/>
            <HouseCard card={card[1]}/>
            <HouseCard card={card[2]}/>
        </div>
    )
}