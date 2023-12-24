import { FiltersList } from './FiltersList';


export function SearchFiltersBlock() {
    return (
        <div className="filtersContainer">
            <FiltersList isMain={false} />
        </div>
    )
}