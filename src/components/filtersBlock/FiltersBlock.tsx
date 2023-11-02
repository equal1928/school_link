import Button from 'react-bootstrap/Button';
import { FiltersList } from './FiltersList';
import filtersImage from '../images/filtersImage.png'

import { useNavigate } from 'react-router-dom';


export function FiltersBlock() {
    const navigate = useNavigate();
    function handleClick(event: any) {
        navigate('/search-map');
    }

    return (
        <div className="filtersContainer" style={{ backgroundImage: `url(${filtersImage})` }}>
            <FiltersList />
            <div>
                <Button className="searchButton" variant="light" size="lg" onClick={handleClick}>Найти</Button>
            </div>
        </div>
    )
}