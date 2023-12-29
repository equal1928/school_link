import { Container, Pagination, Spinner } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { HouseCardSmall } from './HouseCardSmall'
import { HouseModelCard } from '../../models/HouseModelCard'
import { PointsHousesOnMap } from '../../models/PointsHousesOnMap'

import './Cards.css'


export function ListHouse({ isSearch = true }: { isSearch?: Boolean }) {
    const [cards, setCards] = useState<HouseModelCard[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(5);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            let response;
            if (isSearch) {
                // const searchUrl = window.location.search;
                // const homesResponse = await axios.get<PointsHousesOnMap[]>(`/flats${searchUrl}`);
                // let respArray: PointsHousesOnMap[] = [];
                // if (!Array.isArray(homesResponse.data))
                //     respArray = [homesResponse.data];
                // else
                //     respArray = homesResponse.data;
                // const getRequests = respArray.map(async (item: PointsHousesOnMap) => {
                //     const response = await axios.get<HouseModelCard>(`/flats/${item.id}`);
                //     return response.data;
                // });
                // const homesData = await Promise.all(getRequests);
                // setCards(homesData);
                // setIsLoading(true);
                // return;

                response = await axios.get("https://retoolapi.dev/cZVlG9/homeinfo");
            } else {
                //Избранное chosen
                //const storedPhone = localStorage.getItem('userPhone');
                //response = await axios.get(`https://retoolapi.dev/cZVlG9/chosen/${storedPhone}`);
                response = await axios.get("https://retoolapi.dev/cZVlG9/homeinfo/1");
            }
            if (!Array.isArray(response.data))
                setCards([response.data]);
            else
                setCards(response.data);
            setIsLoading(true);
          } catch (error) {
            console.error(error);
            setIsLoading(true);
          }
        };
    
        fetchData();
      }, [isSearch]);

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
        if (!isLoading) {
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

        if (currentCards.length < 1)
            return (<><h2>Ничего не найдено.</h2></>);

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
                {displayedPages.length > 1 && displayedPages.map((page) => (
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