import { Header } from '../components/header/Header'
import { MainFiltersBlock } from '../components/filtersBlock/MainFiltersBlock'
import { DescriptionBlock } from '../components/descriptionBlock/DescriptionBlock'
import { Footer } from '../components/footer/Footer'

import main from '../components/images/main.jpeg'
import '../components/descriptionBlock/DescriptionBlock.css';
import './MainPage.css'

export function MainPage() {
    return (
        <div>
            <div className="mainContainer">
                <Header isMainPage={true}/>
                <div className="mainTextWrapper">
                    <div className="firstPart">Хорошая школа рядом -</div>
                    <div className="secondPart"> это удобно</div>
                </div>
                <MainFiltersBlock/>
            </div>
            <DescriptionBlock/>
            <Footer/>
        </div>
    );
}

export default MainPage; 