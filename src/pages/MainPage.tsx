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
            <div className="mainContainer" style={{ backgroundImage: `url(${main})` }}>
                <Header />
                <MainFiltersBlock />
            </div>
            <DescriptionBlock />
            <Footer />
        </div>
    );
}

export default MainPage; 