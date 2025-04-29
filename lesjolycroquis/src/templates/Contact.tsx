import Header from './Composants/Header'
import Footer from './Composants/Footer'
import ContactBox from './Composants/ContactBoxProps'

import { motion } from "framer-motion";

import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook } from 'react-icons/fa'
import portrait from '../assets/images/Mere.jpg'
import image from '../assets/images/Portail.jpg'

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
        
      <section className="flex-1 bg-[#e7fcfd] px-4 py-12 space-y-12">
      <div className="max-w-6xl mx-auto p-6 bg-white border-4 border-[#e0d6cb] rounded-2xl shadow-md flex flex-col gap-8 font-caveat">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ duration: 1 }}>
        <h1 className="text-center text-4xl font-bold text-gray-800 font-caveat">Me contacter</h1>
      </motion.div>

        {/* Image du portail */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div className="max-w-4xl mx-auto border-4 border-[#e0d6cb] rounded-2xl shadow-lg overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ duration: 2 }}>
            <img 
              src={image} 
              alt="Nous contacter" 
              className="w-full h-auto object-cover max-h-[600px]" 
            />
          </motion.div>
          <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Qui suis-je ?
          </h1>
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Catherine JOLY MOUTAULT.
          </h1>

          <p>
            Ayant quitté récemment l’Education Nationale où j’étais directrice d’école dans le primaire puis professeur de lettres dans le secondaire , je suis retournée à ma première passion : <br/>le dessin.
          </p>
          <p>
            En effet, toute jeune je suivais les cours du soir aux Beaux Arts en région parisienne tout en m’engageant dans l’enseignement en parallèle.
          </p>
          <p>
          Quel bonheur pour moi de joindre ces deux domaines maintenant à Excideuil !
          </p>
          </div>
        </div>
        {/* Portrait */}
        <motion.div className="flex justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ duration: 3 }}>
          <img
            src={portrait}
            alt="Portrait"
            className="w-48 h-48 rounded-full border-4 border-[#e0d6cb] shadow-lg object-cover"
          />
        </motion.div>

        {/* Les trois boxs */}
        <motion.div className="flex flex-col md:flex-row justify-center items-center gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ duration: 4 }}>
            <ContactBox
              icon={<FaPhone />}
              title="Appelez-moi"
              content={
                <a>
                  06 21 58 65 63
                </a>
              }
            />
            <ContactBox
              icon={<FaMapMarkerAlt />}
              title="Où me trouver"
              content={
                <a
                  href="https://www.google.com/maps?q=1+rue+du+roc,+24160+Excideuil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  1 rue du roc, 24160 Excideuil
                </a>
              }
            />
            <ContactBox
              icon={<FaEnvelope />}
              title="Par mail"
              content={
                <a
                  href="mailto:lesjolycroquis@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  lesjolycroquis@gmail.com
                </a>
              }
            />
            <ContactBox
              icon={<FaFacebook />}
              title="Sur Facebook"
              content={
                <a
                  href="https://www.facebook.com/people/Les-Joly-Croquis/61564116073882/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Les Joly Croquis
                </a>
              }
            />
          </motion.div>

      </div>
      </section>

      <Footer />
    </div>
  )
}
