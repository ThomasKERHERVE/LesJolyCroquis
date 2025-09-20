import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Accueil from './src/templates/Accueil';
import LesCours from './src/templates/LesCours';
import Contact from './src/templates/Contact';
import LesStages from './src/templates/LesStages';
import Actualite from './src/templates/Actualité';
import Atelier from './src/templates/Atelier';
import Realisations from './src/templates/Rea';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/LesCours" element={<LesCours />} />
        <Route path="/LesStages" element={<LesStages />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Actualite" element={<Actualite />} />
        <Route path="/Atelier" element={<Atelier />} />
        <Route path="/Realisations" element={<Realisations />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);

// npm run deploy
// Pour mettre à jour le site