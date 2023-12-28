import { FiltersList } from './FiltersList';

import './FiltersContainer.css'

export function MainFiltersBlock() {
    return (
        <div className="filtersContainer" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "55vh"
        }}>
            <FiltersList isMainPage={true} />
        </div>
    )
}