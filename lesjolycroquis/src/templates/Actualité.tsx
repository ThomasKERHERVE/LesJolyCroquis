import Header from './Composants/Header'
import Footer from './Composants/Footer'
import image from '../assets/images/Désert.jpg'

import { motion } from "framer-motion";

// Année scolaire dynamique
const today = new Date()
const currentYear = today.getFullYear()
const currentMonth = today.getMonth() + 1

const startYear = currentMonth >= 9 ? currentYear : currentYear - 1
const endYear = startYear + 1


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
              
              <p className="text-center text-2xl font-semibold">
                Saison {startYear}-{endYear}
              </p>
            </motion.div>

            <motion.div className="text-center space-y-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ duration: 4 }}>
              <p>Reprise des cours la semaine du 22 septembre {currentYear}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
