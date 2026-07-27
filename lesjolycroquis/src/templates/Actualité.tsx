import Header from './Composants/Header'
import Footer from './Composants/Footer'
import image from '../assets/images/Désert.jpg'
import ArtThe from '../assets/images/ArtTherapie.jpeg'

import { motion } from "framer-motion";

export default function Actu() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="flex-1 bg-[#e7fcfd] px-4 py-12">
        <div className="max-w-6xl mx-auto p-6 bg-white border-4 border-[#e0d6cb] rounded-2xl shadow-md flex flex-col gap-8 font-caveat">
          
          {/* Image */}
          <motion.div className="w-full rounded-2xl border-4 border-[#e0d6cb] shadow-lg overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ duration: 1 }}>
            <img
              src={image}
              alt="Atelier de dessin"
              className="object-cover w-full max-h-[800px]"
            />
          </motion.div>

          {/* Texte */}
          <div className="w-full text-gray-800 text-xl space-y-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ duration: 2 }}>
              <h1 className="text-center text-3xl font-bold text-gray-800">L'Actualité</h1>
              <br></br>
              <p className="text-center text-2xl font-semibold">
                Saison 2025-2026
              </p>

              <div className="text-center space-y-2">
                <p>Reprise des cours la semaine du 22 septembre {2025}</p>
              </div>
              <br></br>

              <p className="text-center text-2xl font-semibold">
                  Saison 2026-2027
              </p>
              <div className="text-center space-y-2">
                Année en parenthèse
                <br></br>
                Formation en Art Thérapie :
              </div>
              <div className="w-1/2 mx-auto rounded-2xl border-4 border-[#e0d6cb] shadow-md overflow-hidden">
                <img
                  src={ArtThe}
                  alt="Cours de dessin"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
