import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { FiltersList } from './FiltersList';

export function FiltersBlock() {
    const navigate = useNavigate();
    function handleClick(event: any) {
        navigate('/search-map');
    }

    return (
        <div className="filtersContainer">
            <FiltersList />
            <div>
                <Button className="searchButton" variant="light" size="lg" onClick={handleClick}>Найти</Button>
            </div>
        </div>
    )
}