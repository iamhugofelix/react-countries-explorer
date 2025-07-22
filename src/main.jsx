import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import './styles/reset.scss';
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import NotFound from './pages/NotFound.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Rout path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
