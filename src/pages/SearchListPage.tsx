import { Button, Container, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { Header } from '../components/header/Header'
import { SearchFiltersBlock } from '../components/filtersBlock/SearchFiltersBlock'
import { ListHouse } from "../components/cards/ListHouse"
import { Footer } from '../components/footer/Footer'

import './SearchListPage.css'

export function SearchListPage() {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/search-map');
    }
    
    return (
        <div>
            <Header />
            <SearchFiltersBlock />
            <Container className="showMapRow">
                <Button variant="light" onClick={handleClick}>Показать объекты на карте</Button>
            </Container>
            <Container className="ListContainer">
                <ListHouse />
            </Container>
            <Footer />
        </div>
    );
}

export default SearchListPage; 