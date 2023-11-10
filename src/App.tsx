import React from 'react'
import { Route, Routes } from "react-router-dom"

import { MainPage } from "./pages/MainPage"
import { SearchMapPage } from "./pages/SearchMapPage"
import { SearchListPage } from "./pages/SearchListPage"

import "leaflet/dist/leaflet.css"

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search-map" element={<SearchMapPage />} />
          <Route path="/search-list" element={<SearchListPage />} />
      </Routes>
    </div>
  );
}

export default App;
