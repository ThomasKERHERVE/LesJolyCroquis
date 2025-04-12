import Header from './Composants/Header'
import Footer from './Composants/Footer'
import image from '../assets/images/Portrait.jpg'

export default function LesStages() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="flex-1 bg-[#e7fcfd] px-4 py-12">
        <div className="max-w-6xl mx-auto p-6 bg-white border-4 border-[#e0d6cb] rounded-2xl shadow-md flex flex-col md:flex-row gap-8 font-caveat">

          {/* Image à gauche */}
          <div className="md:w-1/2 w-full flex justify-center items-center">
            <div className="rounded-2xl border-4 border-[#e0d6cb] shadow-md overflow-hidden">
              <img
                src={image}
                alt="Cours de dessin"
                className="w-full h-auto object-cover max-h-[700px]"
              />
            </div>
          </div>

          {/* Texte à droite */}
          <div className="md:w-1/2 w-full text-gray-800 text-xl space-y-6">
            {/* Ajouter ton texte ici */}
            <br/>
              <h2 className="text-center text-3xl font-semibold mb-4">Les Stages</h2>
              <br/>
              <p>
                Des stages seront proposés en cours d'année s'adressant aux jeunes à partir de 16 ans ainsi qu'aux adultes.
              </p>
              <p>
                Des thèmes précis seront aboudés avec quelque fois l'intervention de professionnels spécialisés dans un domaine particulier. ( Le portrait aux pastels, le regard...)
              </p>
              <p>
                Les tarifs varieront en fonction de la durée, de l'intervenant, l'envie de séjouner sur place.
              </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
