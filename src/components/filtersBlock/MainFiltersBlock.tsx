import { FiltersList } from './FiltersList';

import './FiltersContainer.css'


export function MainFiltersBlock() {
    return (
        <div className="filtersContainer" style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            flexDirection: "column",
                            height: "90vh",
                            paddingTop: "100px"
                        }}>
            <div className="mainTextWrapper">
                <p className="mainText">
                    Хорошая школа рядом - <br/> это удобно
                </p>
            </div>
            <FiltersList isMain={true} />
        </div>
    )
}