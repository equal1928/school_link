import { FiltersList } from './FiltersList';


export function SearchFiltersBlock() {
    return (
        <div className="filtersContainer" style={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
            <FiltersList isMain={false} />
        </div>
    )
}