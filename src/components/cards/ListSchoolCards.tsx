import { SchoolCard } from './SchoolCard'
import img1 from '../images/Rectangle1.png'
import img2 from '../images/Rectangle2.png'

import './Cards.css'

const card = [
    {
        id: 1,
        photo: `${img1}`,
        title: "СУНЦ УрФУ",
        features: [
            "Профильные классы",
            "Подготовка к олимпиадам", 
            "Высокий средний бал ЕГЭ"
        ],
        address: "г. Екатеринбург, ул. Данилы Зверева, д. 30",
        link: "https",
    },
    {
        id: 1,
        photo: `${img2}`,
        title: "МАОУ Гимназия №9",
        features: [
            "Профильные классы",
            "Подготовка к олимпиадам", 
            "Поступление с 5 класса"
        ],
        address: "г. Екатеринбург, пр. Ленина,  д. 33",
        link: "https",
    },
]

export function ListSchoolCards() {
    return (
        <div className='ListSchoolCards'>
            <SchoolCard card={card[0]}/>
            <SchoolCard card={card[1]}/>
            <SchoolCard card={card[0]}/>
            <SchoolCard card={card[1]}/>
        </div>
    )
}