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
        <h1 className="text-center text-4xl font-bold text-gray-800 font-caveat">Nous contacter</h1>
      </motion.div>

        {/* Image du portail */}
        <motion.div className="max-w-4xl mx-auto border-4 border-[#e0d6cb] rounded-2xl shadow-lg overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ duration: 2 }}>
          <img 
            src={image} 
            alt="Nous contacter" 
            className="w-full h-auto object-cover max-h-[600px]" 
          />
        </motion.div>

        {/* Portrait */}
        <motion.div className="flex justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ duration: 3 }}>
          <img
            src={portrait}
            alt="Portrait"
            className="w-48 h-48 rounded-full border-4 border-[#e0d6cb] shadow-lg object-cover"
          />
        </motion.div>

        <motion.div className="flex justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ duration: 3 }}>
          <h1 className="text-center text-3xl font-bold text-gray-800 font-caveat">Catherine Moutault</h1>
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
              title="Où nous trouver"
              content={
                <a
                  href="https://www.google.com/maps?q=1+rue+du,+24160+Excideuil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  1 rue du, 24160 Excideuil
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
