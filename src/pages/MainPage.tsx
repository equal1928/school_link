import { Header } from '../components/header/Header'
import { FiltersBlock } from '../components/filtersBlock/FiltersBlock'
import { DescriptionBlock } from '../components/descriptionBlock/DescriptionBlock'
import { Footer } from '../components/footer/Footer'

import filtersImage from '../components/images/filtersImage.png'
import '../components/descriptionBlock/DescriptionBlock.css';
import '../components/filtersBlock/FiltersContainerMain.css'
import './MainPage.css'

export function MainPage() {
    return (
        <div>
            <div className="mainContainer" style={{ backgroundImage: `url(${filtersImage})` }}>
                <Header />
                <FiltersBlock />
            </div>
            <DescriptionBlock />
            <Footer />
        </div>
    );
}

export default MainPage; 