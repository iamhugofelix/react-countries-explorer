import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import NotFound from './pages/NotFound.jsx';
import CurrenciesPage from './pages/CurrenciesPage.jsx';
import RegionsPage from './pages/RegionsPage.jsx';
import NavBar from './components/NavBar.jsx';
import RegionDetailsPage from './pages/RegionsDetailsPage.jsx';
import CountryDetailPage from './pages/CountryDetailsPage.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/country/:name" element={<CountryDetailPage />} />

        <Route path="/regions" element={<RegionsPage />} />
        <Route path="/region/:name" element={<RegionDetailsPage />} />

        <Route path="/currencies" element={<CurrenciesPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
