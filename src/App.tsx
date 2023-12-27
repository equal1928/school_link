import React from 'react'
import { Route, Routes } from "react-router-dom"

import { MainPage } from "./pages/MainPage"
import { SearchMapPage } from "./pages/SearchMapPage"
import { SearchListPage } from "./pages/SearchListPage"
import { HomePage } from "./pages/HomePage"
import { SchoolPage } from "./pages/SchoolPage"
import { FavoritesPage } from "./pages/FavoritesPage"

import "leaflet/dist/leaflet.css"

const NotFoundPage = () => {
  const styles: Record<string, React.CSSProperties> = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
    },
    heading: {
      fontSize: '36px',
      color: '#e74c3c', // Красный цвет
    },
    link: {
      fontSize: '20px',
      color: '#3498db', // Синий цвет
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Страница не найдена</h1>
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search-map" element={<SearchMapPage />} />
          <Route path="/search-list" element={<SearchListPage />} />
          <Route path="/homes/:id" element={<HomePage />} />
          <Route path="/schools/:id" element={<SchoolPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
