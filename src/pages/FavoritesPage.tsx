import { Container } from 'react-bootstrap'

import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import { ListHouse } from '../components/cards/ListHouse'

import './FavoritesPage.css'


export function FavoritesPage() {
    return (
        <div>
            <Header />
            <Container className="ListContainer">
                <p className="favoritesTitle">Избранное</p>
                <ListHouse isSearch={false}/>
            </Container>
            <Footer />
        </div>
    )
}