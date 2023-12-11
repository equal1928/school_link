import { Header } from '../components/header/Header'
import { MainFiltersBlock } from '../components/filtersBlock/MainFiltersBlock'
import { DescriptionBlock } from '../components/descriptionBlock/DescriptionBlock'
import { Footer } from '../components/footer/Footer'

import filtersImage from '../components/images/filtersImage.png'
import '../components/descriptionBlock/DescriptionBlock.css';
import './MainPage.css'

export function MainPage() {
    return (
        <div>
            <div className="mainContainer" style={{ backgroundImage: `url(${filtersImage})` }}>
                <Header />
                <MainFiltersBlock />
            </div>
            <DescriptionBlock />
            <Footer />
        </div>
    );
}

export default MainPage; 