//import { ListSchoolCards } from '../cards/ListSchoolCards'

import './SchoolBlock.css'

export function SchoolBlock() {
    return (
        <div className="SchoolBlock">
            <div className="BestSchool">
                <h3>Лучшие школы города</h3>
            </div>
            <div className="BestSchoolDesc">
                <p>
                    Выбор школы для вашего ребенка — это очень важное решение, 
                    которое может существенно повлиять на его будущее. Среда, 
                    в которой ребенок проводит большую часть своего времени, 
                    будет играть важную роль в его развитии и формировании его 
                    взглядов и ценностей.
                </p>
            </div>
            {/* <ListSchoolCards /> */}
        </div>
    )
}