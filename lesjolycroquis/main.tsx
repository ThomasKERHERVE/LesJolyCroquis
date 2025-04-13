import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Importer Routes et Route
import './index.css';
import Accueil from './src/templates/Accueil';
import LesCours from './src/templates/LesCours';
import Contact from './src/templates/Contact';
import LesStages from './src/templates/LesStages';
import Actualite from './src/templates/Actualité';
import Atelier from './src/templates/Atelier';
import Realisations from './src/templates/Rea';
import AdminRealisations from './src/templates/AdmionRealisation';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/lesjolycroquis">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/LesCours" element={<LesCours />} />
        <Route path="/LesStages" element={<LesStages />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Actualite" element={<Actualite />} />
        <Route path="/Atelier" element={<Atelier />} />
        <Route path="/Realisations" element={<Realisations />} />
        <Route path="/AdminRealisations" element={<AdminRealisations />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
