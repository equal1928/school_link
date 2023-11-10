import { Header } from '../components/header/Header'
import { FiltersList } from '../components/filtersBlock/FiltersList'
import { ListHouseCards } from '../components/cards/ListHouseCards'
import { Map } from '../components/map/Map'

import '../components/filtersBlock/FiltersContainerSearch.css'
import '../components/map/SearchMap.css'

export function SearchPageMap() {
    return (
        <div>
            <Header />
            <FiltersList />
            <div className="SearchMapContainer">
                <ListHouseCards />
                <Map />
            </div>
        </div>
    );
}

export default SearchPageMap; 