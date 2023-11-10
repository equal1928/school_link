import { Button, Container, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { Header } from '../components/header/Header'
import { FiltersList } from '../components/filtersBlock/FiltersList'
import { ListHouse } from "../components/cards/ListHouse"

export function SearchListPage() {
    const navigate = useNavigate();
    function handleClick(event: any) {
        navigate('/search-map');
    }

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
        <div>
            <Header />
            <FiltersList />
            <Button onClick={handleClick}>Показать объекты на карте</Button>
            <Container>
                <ListHouse />
                <Pagination>{items}</Pagination>
            </Container>
        </div>
    );
}

export default SearchListPage; 