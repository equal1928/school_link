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
            <div className="mainTextWrapper">
                <div className="mainText">
                    Хорошая школа рядом - <br/> это удобно
                </div>
            </div>
            <FiltersList isMain={true} />
        </div>
    )
}