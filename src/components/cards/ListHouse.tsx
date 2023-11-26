import { HouseCardSmall } from './HouseCardSmall'
import img1 from '../images/House1.png'
import img2 from '../images/House2.png'
import img3 from '../images/House3.png'


import './Cards.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { HouseModelCard } from '../../models/HouseModelCard'
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
    const [cards, setCards] = useState<HouseModelCard[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(5);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("https://retoolapi.dev/cZVlG9/homeinfo")
            .then(response => {
                setCards(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const lastPage = Math.ceil(cards.length / cardsPerPage);
    const maxPageDisplay = 5;

    const getDisplayedPages = () => {
        const startPage = Math.max(1, currentPage - Math.floor(maxPageDisplay / 2));
        const endPage = Math.min(lastPage, startPage + maxPageDisplay - 1);
        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const renderCards = () => {
        if (isLoading) {
            return (
                <Container className="SpinnerListHouse">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Container>
            );
        }

        const indexOfLastCard = currentPage * cardsPerPage;
        const indexOfFirstCard = indexOfLastCard - cardsPerPage;
        const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

        return currentCards.map(currentCard => (
            <HouseCardSmall key={currentCard.id} card={currentCard} />
        ));
    };

    const renderPaginationItems = () => {
        const displayedPages = getDisplayedPages();

        return (
            <>
                {currentPage > 1 && (
                    <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} />
                )}
                {displayedPages.map((page) => (
                    <Pagination.Item
                        key={page}
                        active={page === currentPage}
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </Pagination.Item>
                ))}
                {currentPage < lastPage && (
                    <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} />
                )}
            </>
        );
    };

    return (
        <div className="ListHouse">
            {renderCards()}
            <Pagination>{renderPaginationItems()}</Pagination>
        </div>
    );
}