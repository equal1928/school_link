import { Header } from '../components/header/Header'
import { FiltersBlock } from '../components/filtersBlock/FiltersBlock'
import { DescriptionBlock } from '../components/descriptionBlock/DescriptionBlock'

import '../components/descriptionBlock/DescriptionBlock.css';
import '../components/filtersBlock/FiltersContainerMain.css'

export function MainPage() {
    return (
        <div>
            <Header />
            <FiltersBlock />
            <DescriptionBlock />
        </div>
    );
}

export default MainPage; 