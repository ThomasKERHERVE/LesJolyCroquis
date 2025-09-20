import Header from './Composants/Header'
import Footer from './Composants/Footer'
import coursImage from '../assets/images/palette.jpg'

import { motion } from "framer-motion";

export default function LesCours() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="flex-1 bg-[#e7fcfd] px-4 py-12">
        <div className="max-w-6xl mx-auto p-6 bg-white border-4 border-[#e0d6cb] rounded-2xl shadow-md flex flex-col md:flex-row gap-8 font-caveat">

          {/* Texte à gauche */}
          <div className="md:w-1/2 w-full text-gray-800 text-xl space-y-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ duration: 1 }}>
              <h2 className="text-3xl font-semibold mb-4">Les Cours</h2>
            </motion.div>

            <motion.div className="space-y-4 border-b pb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ duration: 2 }}>
              <p className="font-semibold">3 à 5 ans avec un parent :</p>
              <p>Le samedi matin<br/>Max 5 enfants</p>
            </motion.div>

            <motion.div className="space-y-4 border-b pb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ duration: 3 }}>
              <p className="font-semibold">Tout âge :</p>
              <p>Le mercredi de 15h00 à 16h30<br/>Max 8 enfants<br/>210€ l’année scolaire</p>
            </motion.div>

            <motion.div className="space-y-4 border-b pb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ duration: 4 }}>
              <p className="font-semibold">8 à 10 ans :</p>
              <p>Le vendredi de 16h30 à 18h00<br/>Max 8 enfants<br/>210€ l’année scolaire</p>
            </motion.div>

            <motion.div className="space-y-4 border-b pb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ duration: 5 }}>
              <p className="font-semibold">12 à 15 ans :</p>
              <p>Le mardi de 15h30 à 19h00<br/>Max 8 jeunes<br/>210€ l’année scolaire</p>
            </motion.div>

            <motion.div className="space-y-4 border-b pb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ duration: 6 }}>
              <p className="font-semibold">À partir de 16 ans et adultes :</p>
              <p>Le samedi de 10h30 à 12h00 une semaine sur deux ou sous forme de stage</p>
            </motion.div>

            <motion.div className="space-y-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ duration: 7 }}>
              <p className="font-semibold">Cours particuliers</p>
            </motion.div>
          </div>

          {/* Image à droite */}
            <motion.div className="md:w-1/2 w-full flex justify-center items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ duration: 3 }}>
              <div className="rounded-2xl border-4 border-[#e0d6cb] shadow-md overflow-hidden">
                <img
                  src={coursImage}
                  alt="Cours de dessin"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
