import { FiltersList } from './FiltersList';

import './FiltersContainer.css'


export function MainFiltersBlock() {
    return (
        <div className="filtersContainer" style={{
                            display: "flex",
                            justifyContent: "end",
                            alignItems: "center",
                            flexDirection: "column",
                            height: "90vh"
                        }}>
            <FiltersList isMain={true} />
        </div>
    )
}